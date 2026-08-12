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

export const isOk = <E, A>(result: Result<E, A>): result is Ok<A> => result._tag === "Ok";
export const isErr = <E, A>(result: Result<E, A>): result is Err<E> => result._tag === "Err";

export function map<E, A, B>(result: Result<E, A>, f: (value: A) => B): Result<E, B> {
  return result._tag === "Ok" ? ok(f(result.value)) : result;
}

export function chain<E, A, B>(
  result: Result<E, A>,
  f: (value: A) => Result<E, B>,
): Result<E, B> {
  return result._tag === "Ok" ? f(result.value) : result;
}

export function mapError<E, F, A>(result: Result<E, A>, f: (error: E) => F): Result<F, A> {
  return result._tag === "Err" ? err(f(result.error)) : result;
}

export function fold<E, A, B>(
  result: Result<E, A>,
  onErr: (error: E) => B,
  onOk: (value: A) => B,
): B {
  return result._tag === "Ok" ? onOk(result.value) : onErr(result.error);
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
