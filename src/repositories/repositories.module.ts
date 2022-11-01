import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { RebelRepository } from './rebel.repository';

@Module({
  imports: [HttpModule],
  providers: [RebelRepository],
  exports: [RebelRepository],
})
export class RepositoriesModule {}
