export const testGrpcProtocol = async (
  grpcCall: Promise<any>,
  expected: {
    code: string;
    success: boolean;
    layer: string;
    serviceName: string;
    blStack: { message: string; method: string };
  },
) => {
  try {
    const { code, success, layer, serviceName, blStack, data } = await grpcCall;

    // Validate metadata in the response
    expect(code).toBe(expected.code);
    expect(success).toBe(expected.success);
    expect(layer).toBe(expected.layer);
    expect(serviceName).toBe(expected.serviceName);
    expect(blStack).toEqual(expected.blStack);

    return data;
  } catch (err) {
    throw err; // Re-throw the error so the test will fail
  }
};
