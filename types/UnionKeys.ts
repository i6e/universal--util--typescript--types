import { IsSameType } from "./IsSameType";
import { UnionToIntersection } from "./UnionToIntersection";

type IsUnionTag<U, T extends keyof U, Y = true, N = never> = AllIs<
  U[T],
  string,
  string extends U[T]
    ? N
    : IsSameType<
        U[T] extends infer I
          ? I extends any
            ? IsUnion<Extract<U, Record<T, I>>, true, never>
            : never
          : never,
        never,
        Y,
        N
      >,
  N
>;
type AllIs<U, T, Y = true, N = never> = IsSameType<Extract<U, T>, U, Y, N>;
type IsUnion<T, Y = true, N = never> = [T] extends [UnionToIntersection<T>]
  ? N
  : Y;

export type UnionKeys<T> = {
  [K in keyof T]-?: IsUnionTag<T, K, K>;
}[keyof T];
