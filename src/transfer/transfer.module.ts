import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { Transfer } from '../entities/transfer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Transfer])],
  controllers: [TransferController],
  providers: [TransferService],
})
export class TransferModule {}
