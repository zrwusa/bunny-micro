// src/user/dto/create-product.dto.ts

import { IdField } from 'src/common';

export class CreateProductDto {
  @IdField('product')
  id!: string;

  name: string;

  price: number;

  description: string;
}
