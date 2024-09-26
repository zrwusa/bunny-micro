import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createProduct(
    name: string,
    price: number,
    description: string,
  ): Promise<Product> {
    const product = this.productRepository.create({ name, price, description });
    return await this.productRepository.save(product);
  }

  async getProductById(id: string): Promise<Product> {
    return await this.productRepository.findOneBy({ id });
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }
}
