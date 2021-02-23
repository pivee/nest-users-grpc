import { Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class UserNotFoundException extends RpcException {
  private readonly logger = new Logger(UserNotFoundException.name);

  constructor(id, error = {}, message = 'User does not exist') {
    super({ ...error, message });
    this.logger.warn(message);
  }
}
