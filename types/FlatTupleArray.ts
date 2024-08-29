type RemoveFirst<T extends any[]> = T extends [any, ...infer I] ? I : never;

type FlatTupleArrayResult<
  TResult extends any[],
  TQueue extends any[]
> = TQueue["length"] extends 0
  ? TResult
  : FlatTupleArrayResult<
      { [K in keyof TQueue[0]]: [...TResult, K] }[keyof TQueue[0]],
      RemoveFirst<TQueue>
    >;

type FlatTupleArrayInternal<T extends any[]> = number extends T["length"]
  ? T
  : FlatTupleArrayResult<[], T>;

export type FlatTupleArray<T extends any[]> = FlatTupleArrayInternal<T>;
