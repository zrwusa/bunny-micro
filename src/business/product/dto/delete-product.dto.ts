import { IdField } from '../../../common';

export class DeleteProductDto {
  @IdField('product')
  id!: string;
}