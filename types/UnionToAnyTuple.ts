import { UnionAny } from "./UnionAny";

type UnionToAnyTupleInternal<T, U extends any[]> = UnionAny<T> extends infer I
  ? [I] extends [never]
    ? U
    : UnionToAnyTupleInternal<Exclude<T, I>, [...U, I]>
  : never;

export type UnionToAnyTuple<T> = UnionToAnyTupleInternal<T, []>;
