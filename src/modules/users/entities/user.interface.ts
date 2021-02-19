import { Address } from 'src/common/typings/address.type';
import { Honorifics } from 'src/common/enums/honorifics.enum';
import { Phone } from 'src/common/typings/phone.type';

export interface IUser {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  title?: Honorifics;
  address?: Address;
  phone?: Phone;
}
