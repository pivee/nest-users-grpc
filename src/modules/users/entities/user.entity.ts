import { BaseEntity } from 'src/common/models/base-entity.model';
import { Address } from 'src/common/typings/address.type';
import { Honorifics } from 'src/common/enums/honorifics.enum';
import { Phone } from 'src/common/typings/phone.type';
import { IUser } from './user.interface';

export class User extends BaseEntity implements IUser {
  public email: string;
  public username: string;
  public firstName: string;
  public lastName: string;
  public title: Honorifics;
  public address: Address;
  public phone: Phone;

  constructor({
    email,
    username,
    firstName,
    lastName,
    title,
    address,
    phone,
  }: IUser) {
    super();
    this.email = email;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.address = address;
    this.phone = phone;
  }
}
