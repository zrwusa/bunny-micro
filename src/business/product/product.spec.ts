import { productClient, testGrpcProtocol } from '../../../test/helpers';

describe('gRPC Product Service', () => {
  const layer = 'controller';
  const serviceName = 'bunny-micro';
  it('should fetch all product', async () => {
    const products = await testGrpcProtocol(productClient.getAllProducts({}), {
      code: 'GET_ALL_PRODUCTS_SUCCESSFULLY',
      success: true,
      layer,
      serviceName,
      blStack: {
        message: '',
        method: '',
      },
    });

    // Check if the response is an array (assuming GetAllProducts returns an array)
    expect(Array.isArray(products)).toBe(true);
    // Additional assertions to check the structure of the product array (optional)
    for (const product of products) {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('description');
    }
  });
});