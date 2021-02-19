import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const usersMicroserviceOptions = {
  identifier: 'Users',
  transport: Transport.GRPC,
  options: {
    package: 'users',
    protoPath: join(__dirname, '../../../src/modules/users/users.proto'),
  },
};
