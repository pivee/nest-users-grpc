import { Address } from '../../../common/typings/address.type';
import { Honorifics } from '../../../common/enums/honorifics.enum';
import { Phone } from '../../../common/typings/phone.type';
import { IBaseEntity } from '../../../common/interfaces/base-entity.interface';

export interface IUser extends IBaseEntity {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  title?: Honorifics;
  address?: Address;
  phone?: Phone;
}
