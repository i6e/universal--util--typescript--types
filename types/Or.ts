type IsAssignableToEachOther<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

export type Or<
  A extends boolean,
  B extends boolean,
  T = true,
  F = never
> = IsAssignableToEachOther<A, true> extends true
  ? T
  : IsAssignableToEachOther<B, true> extends true
  ? T
  : F;
