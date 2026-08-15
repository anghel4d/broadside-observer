export type Ok<A> = {
  readonly _tag: "Ok";
  readonly value: A;
};

export type Err<E> = {
  readonly _tag: "Err";
  readonly error: E;
};

/** Either-like result. Fail-fast under `chain`; collect with `partitionResults`. */
export type Result<E, A> = Ok<A> | Err<E>;

export const ok = <A>(value: A): Ok<A> => ({ _tag: "Ok", value });
export const err = <E>(error: E): Err<E> => ({ _tag: "Err", error });

export function chain<E, A, B>(
  result: Result<E, A>,
  f: (value: A) => Result<E, B>,
): Result<E, B> {
  return result._tag === "Ok" ? f(result.value) : result;
}

export function partitionResults<E, A>(
  results: ReadonlyArray<Result<E, A>>,
): { readonly ok: ReadonlyArray<A>; readonly err: ReadonlyArray<E> } {
  const okValues: A[] = [];
  const errValues: E[] = [];
  for (const result of results) {
    if (result._tag === "Ok") okValues.push(result.value);
    else errValues.push(result.error);
  }
  return { ok: okValues, err: errValues };
}
