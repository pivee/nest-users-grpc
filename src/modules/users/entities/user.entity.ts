import { BaseEntity } from 'src/common/models/base-entity.model';
import { Address } from 'src/common/typings/address.type';
import { Honorifics } from 'src/common/enums/honorifics.enum';
import { Phone } from 'src/common/typings/phone.type';
import { IUser } from './user.interface';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends BaseEntity implements IUser {
  @Column()
  public email: string;

  @Column()
  public username: string;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ nullable: true })
  public title: Honorifics;

  @Column({ type: 'text', nullable: true }) // TODO: Fix Data Type
  public address: Address;

  @Column({ type: 'text', nullable: true }) // TODO: Fix Data Type
  public phone: Phone;

  constructor({
    email,
    username,
    firstName,
    lastName,
    title,
    address,
    phone,
  }: {
    email?: string;
    username?: string;
    firstName?: string;
    lastName?: string;
    title?: Honorifics;
    address?: Address;
    phone?: Phone;
  } = {}) {
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
