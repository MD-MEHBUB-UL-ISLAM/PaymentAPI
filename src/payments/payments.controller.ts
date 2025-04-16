import {
    Body,
    Controller,
    Get,
    Post,
    UseGuards,
  } from '@nestjs/common';
  import { PaymentsService } from './payments.service';

  import { GetCurrentUserId } from '../common/decorators';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { AtGuard } from 'src/common/decorators/guards/at.guard';
 
  
  @Controller('payments')
  export class PaymentsController {
    constructor(private paymentsService: PaymentsService) {}
  
    @UseGuards(AtGuard)
    @Post('checkout')
    createPayment(
      @GetCurrentUserId() userId: number,
      @Body() dto: CreatePaymentDto,
    ) {
      return this.paymentsService.createPayment(userId, dto);
    }
  
    @UseGuards(AtGuard)
    @Get('transactions')
    getTransactions(@GetCurrentUserId() userId: number) {
      return this.paymentsService.getTransactions(userId);
    }
  }