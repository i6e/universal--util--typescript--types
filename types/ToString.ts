export type ToString<T> = `${Extract<
  T,
  string | number | bigint | boolean | null | undefined
>}`;
