import { AppModule } from './app.module';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: true,
  });
  app.useLogger(app.get(Logger));
  app.use(helmet());
  await app.listen(3000);
}
bootstrap().catch((e) => console.error(e));
