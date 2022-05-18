import {
  AutoIncrement,
  ForeignKey,
  PrimaryKey,
  DataType,
  CreatedAt,
  UpdatedAt,
  Model,
  Table,
  Column,
  BelongsTo,
} from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";
import { User } from "./User";

@Table({
  tableName: "attachment",
})
export class Attachment extends Model<Attachment> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
  })
  userId: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  originName: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
  })
  size: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
