import { UnionAny } from "./UnionAny";

type UnionSizeInternal<T, R extends any[]> = [T] extends [never]
  ? R["length"]
  : UnionSizeInternal<Exclude<T, UnionAny<T>>, [...R, any]>;

export type UnionSize<T> = UnionSizeInternal<T, []>;
