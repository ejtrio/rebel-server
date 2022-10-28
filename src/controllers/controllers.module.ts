import { AppController } from './app.controller';
import { Module } from '@nestjs/common';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [ServicesModule],
  controllers: [AppController],
})
export class ControllersModule {}
