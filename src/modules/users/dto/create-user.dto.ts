import { Honorifics } from 'src/common/enums/honorifics.enum';
import { Address } from 'src/common/typings/address.type';
import { Phone } from 'src/common/typings/phone.type';
import { IUser } from '../entities/user.interface';

export class CreateUserDto implements IUser {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  title?: Honorifics;
  address?: Address;
  phone?: Phone;
}
