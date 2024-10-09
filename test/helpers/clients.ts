import { createChannel, createClient } from 'nice-grpc';
import { ProductServiceDefinition } from '../../src/grpc/generated/product';

export const productClient = createClient(
  ProductServiceDefinition,
  createChannel('localhost:50051'),
);