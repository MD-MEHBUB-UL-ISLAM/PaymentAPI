import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import Stripe from 'stripe';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private prisma: PrismaService,
    private config: ConfigService, 
  ) {
    const stripeKey = this.config.get<string>('STRIPE_SECRET_KEY');

    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not set');
    }
  
  }
  

  async createPayment(userId: number, dto: CreatePaymentDto) {
    
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount: dto.amount * 100,
        currency: 'usd',
        payment_method_types: ['card'],
        description: dto.description,
      });
      const transaction = await this.prisma.transaction.create({
        data: {
          amount: dto.amount,
          currency: 'USD',
          status: 'pending',
          paymentId: paymentIntent.id,
          userId: userId,
        },
      });

      return {
        clientSecret: paymentIntent.client_secret,
        transactionId: transaction.id,
      };
    } catch (error) {
      throw new ForbiddenException('Payment creation failed');
    }
  }

  async confirmPayment(userId: number, paymentId: string) {
    const paymentIntent = await this.stripe.paymentIntents.retrieve(paymentId);

    if (!paymentIntent) {
      throw new ForbiddenException('Payment not found');
    }

    const transaction = await this.prisma.transaction.updateMany({
      where: {
        paymentId: paymentId, // use Stripe's paymentId (which is string)
        userId: userId,
      },
      data: {
        status: paymentIntent.status,
      },
    });
    

    return transaction;
  }

  async getTransactions(userId: number) {
    return this.prisma.transaction.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}