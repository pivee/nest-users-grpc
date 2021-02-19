import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger('Main');

const microserviceOptions = {
  identifier: 'Users',
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );

  app.listen(() => {
    logger.debug(
      `${microserviceOptions.identifier} gRPC Microservice is listening`,
    );
  });
}
bootstrap();
