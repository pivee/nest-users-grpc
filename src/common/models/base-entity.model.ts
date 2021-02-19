import { IBaseEntity } from '../interfaces/base-entity.interface';
import { v4 as generateUuid } from 'uuid';

export abstract class BaseEntity implements IBaseEntity {
  public id: string;
  public createdDate: Date;
  public createdBy?: string;
  public lastModifiedDate: Date;
  public lastModifiedBy?: string;
  public deletedDate?: Date;
  public isDeleted: boolean;

  constructor() {
    this.id = generateUuid();
    this.createdDate = new Date();
    this.lastModifiedDate = new Date();
    this.isDeleted = false;
  }
}
