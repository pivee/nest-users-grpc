import { PartialType } from '@nestjs/mapped-types';
import { Honorifics } from 'src/common/enums/honorifics.enum';
import { Address } from 'src/common/typings/address.type';
import { Phone } from 'src/common/typings/phone.type';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PartialType(User) {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  title?: Honorifics;
  address?: Address;
  phone?: Phone;
}
