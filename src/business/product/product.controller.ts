import { Controller, NotFoundException } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { controllerResponseCreator } from '../../common/helpers/bl-response';
import { UnknownExportException } from '@nestjs/core/errors/exceptions';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @GrpcMethod('ProductService', 'GetAllProducts')
  async getAllProducts() {
    const { buildSuccess, throwFailure } =
      controllerResponseCreator.createBuilders('getAllProducts');
    const res = await this.productService.getAllProducts();
    const { success, code, data } = res;
    switch (code) {
      case 'GET_ALL_PRODUCTS_FAILED':
        return throwFailure(NotFoundException, 'GET_ALL_PRODUCTS_FAILED');
      default:
        if (success) return buildSuccess('GET_ALL_PRODUCTS_SUCCESSFULLY', data);
        else throwFailure(UnknownExportException, 'GET_ALL_PRODUCTS_FAILED');
    }
  }

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
}
