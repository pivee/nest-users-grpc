export interface IBaseEntity {
  id: string;
  createdDate: Date;
  createdBy?: string;
  lastModifiedDate: Date;
  lastModifiedBy?: string;
  deletedDate?: Date;
  isDeleted: boolean;
}
