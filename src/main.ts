import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { usersMicroserviceOptions } from './modules/users/grpc/users-grpc.options';
import { UsersModule } from './modules/users/users.module';

const logger = new Logger('Main');

async function bootstrap() {
  const usersMicroservice = await NestFactory.createMicroservice(
    UsersModule,
    usersMicroserviceOptions,
  );

  usersMicroservice.listen(() => {
    logger.debug(
      `${usersMicroserviceOptions.identifier} gRPC Microservice is listening`,
    );
  });
}
bootstrap();
