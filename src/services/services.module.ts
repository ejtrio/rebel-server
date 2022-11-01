import { Module } from '@nestjs/common';
import { RebelService } from './rebel.service';
import { RepositoriesModule } from '../repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  providers: [RebelService],
  exports: [RebelService],
})
export class ServicesModule {}
