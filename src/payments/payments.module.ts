import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PrismaModule } from '../prisma/prisma.module'; 
import { ConfigModule } from '@nestjs/config';
import { PaymentsController } from './payments.controller';

@Module({
  imports: [PrismaModule, ConfigModule],
  controllers: [PaymentsController], 
  providers: [PaymentsService],
  exports: [PaymentsService], 
})
export class PaymentsModule {}
