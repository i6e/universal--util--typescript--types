type IsAssignableToEachOther<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

export type And<
  A extends boolean,
  B extends boolean,
  T = true,
  F = never
> = IsAssignableToEachOther<A, true> extends true
  ? IsAssignableToEachOther<B, true> extends true
    ? T
    : F
  : F;
