import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { usersMicroserviceOptions } from './modules/users/grpc/users-grpc.options';

const logger = new Logger('Main');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    usersMicroserviceOptions,
  );

  app.listen(() => {
    logger.debug(
      `${usersMicroserviceOptions.identifier} gRPC Microservice is listening`,
    );
  });
}
bootstrap();
