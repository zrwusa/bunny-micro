import { Product } from '../product.entity';
import { ResponseProductDto } from '../dto/response-product.dto';
import { CreateProductDto } from '../dto/create-product.dto';

export class ProductMapper {
  static toResponseDto(product: Product): ResponseProductDto {
    const { id, name, price, description, createdAt, updatedAt } = product;
    return { id, name, price, description, createdAt, updatedAt };
  }

  static toEntity(createUserDto: CreateProductDto): Product {
    const { name, description, price } = createUserDto;
    const product = new Product();

    product.name = name;
    product.description = description;
    product.price = price;
    return product;
  }
}
