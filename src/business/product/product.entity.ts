import { CreatedAtField, IdField, UpdatedAtField } from 'src/common';
import { generateUuNumId } from 'src/utils';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryColumn({ type: 'bigint' })
  @IdField('product')
  id!: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  description: string;

  @CreatedAtField('product')
  createdAt!: Date;

  @UpdatedAtField('product')
  updatedAt!: Date;

  @BeforeInsert()
  async setId() {
    this.id = generateUuNumId();
  }
}
