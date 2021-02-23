import { PartialType } from '@nestjs/mapped-types';
import { Honorifics } from '../../../common/enums/honorifics.enum';
import { Address } from '../../../common/typings/address.type';
import { Phone } from '../../../common/typings/phone.type';
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
