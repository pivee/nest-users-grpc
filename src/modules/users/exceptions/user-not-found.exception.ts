import { Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class UserNotFoundException extends RpcException {
  private readonly logger = new Logger(UserNotFoundException.name);

  constructor(id, error = {}, message = 'User not found') {
    super({ ...error, message });
    const messageWithUserId = `User with Id "${id}" not found`;
    this.logger.warn(messageWithUserId);
  }
}
