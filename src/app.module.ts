import { ConfigModule } from '@nestjs/config';
import { ControllersModule } from './controllers/controllers.module';
import { LoggerModule } from 'nestjs-pino';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule.forRoot({
      pinoHttp: {
        transport:
          process.env.NODE_ENV === 'local'
            ? {
                target: 'pino-pretty',
                options: {
                  colorize: true,
                  levelFirst: true,
                  translateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
                },
              }
            : undefined,
        quietReqLogger: true,
      },
    }),
    ControllersModule,
  ],
})
export class AppModule {}
