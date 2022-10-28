import { AppService } from './app.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [AppService],
  exports: [AppService],
})
export class ServicesModule {}
