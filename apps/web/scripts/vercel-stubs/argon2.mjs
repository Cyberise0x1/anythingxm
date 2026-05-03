export async function hash(password) { return password; }
export async function verify(hash, password) { return false; }
export default { hash, verify };
