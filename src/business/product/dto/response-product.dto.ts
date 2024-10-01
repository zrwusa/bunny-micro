// src/response-product.dto.ts
import { CreatedAtField, IdField, UpdatedAtField } from '../../../common';

export class ResponseProductDto {
  @IdField('product')
  id!: string;

  name: string;

  price: number;

  description: string;

  @CreatedAtField('product')
  createdAt!: Date;

  @UpdatedAtField('product')
  updatedAt!: Date;
}
