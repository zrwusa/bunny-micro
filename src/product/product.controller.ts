import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'CreateProduct')
  async createProduct(data: {
    name: string;
    price: number;
    description: string;
  }): Promise<{ product: Product }> {
    const product = await this.productService.createProduct(
      data.name,
      data.price,
      data.description,
    );
    return { product };
  }

  @GrpcMethod('ProductService', 'GetProductById')
  async getProductById(data: { id: string }): Promise<{ product: Product }> {
    const product = await this.productService.getProductById(data.id);
    return { product };
  }

  @GrpcMethod('ProductService', 'GetAllProducts')
  async getAllProducts(): Promise<{ products: Product[] }> {
    const products = await this.productService.getAllProducts();
    return { products };
  }
}
