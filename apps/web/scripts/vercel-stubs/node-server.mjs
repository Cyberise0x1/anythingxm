export function serve(opts) {
  return { address: () => ({ port: 0 }), close: () => {} };
}
export function createAdaptorServer() { return {}; }
