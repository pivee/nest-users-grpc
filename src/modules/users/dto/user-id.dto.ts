import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UserIdDto extends PartialType(CreateUserDto) {
  id: string;
}
