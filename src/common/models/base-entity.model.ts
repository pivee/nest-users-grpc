import { IBaseEntity } from '../interfaces/base-entity.interface';
import { v4 as generateUuid } from 'uuid';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export abstract class BaseEntity implements IBaseEntity {
  @PrimaryColumn()
  public id: string;

  @CreateDateColumn()
  public createdDate: Date;

  @Column({ type: 'varchar', nullable: true })
  public createdBy?: string;

  @UpdateDateColumn()
  public lastModifiedDate: Date;

  @Column({ type: 'varchar', nullable: true })
  public lastModifiedBy?: string;

  @DeleteDateColumn()
  public deletedDate?: Date;

  @Column({ type: 'varchar', nullable: true })
  public deletedBy?: string;

  @Column({ type: 'boolean' })
  public isDeleted: boolean;

  constructor() {
    this.id = generateUuid();
    this.createdDate = new Date();
    this.lastModifiedDate = new Date();
    this.isDeleted = false;
  }
}
