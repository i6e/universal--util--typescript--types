import { UnionToIntersection } from "./UnionToIntersection";

export type ToMap<Union, Key extends keyof Union> = UnionToIntersection<
  Union extends { [K in Key]: infer I }
    ? I extends keyof any
      ? { [K in I]: Union }
      : never
    : never
>;
