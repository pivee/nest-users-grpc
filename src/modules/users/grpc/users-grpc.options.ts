import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const usersMicroserviceOptions = {
  identifier: 'Users',
  transport: Transport.GRPC,
  options: {
    url: '127.0.0.1:5001',
    package: 'users',
    protoPath: join(
      __dirname,
      '../../../../src/modules/users/grpc/users.proto',
    ),
  },
};
