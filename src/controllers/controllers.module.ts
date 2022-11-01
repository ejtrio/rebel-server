import { Module } from '@nestjs/common';
import { RebelController } from './rebel.controller';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [RebelController],
})
export class ControllersModule {}
