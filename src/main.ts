// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PROTO_PATH = join(__dirname, './grpc/proto/product.proto');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'product',
      protoPath: PROTO_PATH,
      url: 'localhost:' + configService.get('MICRO_PORT'),
    },
  });
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT') || 8080);
}

bootstrap().then();
