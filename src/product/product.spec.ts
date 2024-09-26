import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { join } from 'path';
import { promisify } from 'util';

const PROTO_PATH = join(process.cwd(), 'src/proto/product.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const productsProto = grpc.loadPackageDefinition(packageDefinition)
  .products as any;

export const inventoryClient = new productsProto.ProductService(
  'localhost:50051',
  grpc.credentials.createInsecure(),
);

const getAllProductsPromisified = promisify(
  inventoryClient.GetAllProducts,
).bind(inventoryClient);

describe('gRPC Product Service', () => {
  it('should fetch all product', async () => {
    try {
      const { products } = await getAllProductsPromisified({});
      // Check if the response is an array (assuming GetAllProducts returns an array)
      expect(Array.isArray(products)).toBe(true);
      console.log('Fetched Products:', products);

      // Additional assertions to check the structure of the product array (optional)
      if (products.length > 0) {
        expect(products[0]).toHaveProperty('name');
        expect(products[0]).toHaveProperty('price');
        expect(products[0]).toHaveProperty('description');
      }
    } catch (err) {
      console.error('gRPC Error:', err);
      // Fail the test if there's an error
      throw err;
    }
  });
});
