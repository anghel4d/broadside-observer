export function assertNever(value: never, message = "Non-exhaustive match"): never {
  throw new Error(`${message}: ${JSON.stringify(value)}`);
}
