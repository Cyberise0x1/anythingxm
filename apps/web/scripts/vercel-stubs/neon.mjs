export function neon() { return async () => []; }
export const neonConfig = {};
export class Pool {
  query() { return Promise.resolve({ rows: [], rowCount: 0 }); }
  connect() { return Promise.resolve({ query: () => Promise.resolve({ rows: [] }), release: () => {} }); }
  end() { return Promise.resolve(); }
}
