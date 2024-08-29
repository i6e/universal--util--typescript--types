export type IsOptionalKey<T, K extends keyof T> = Pick<T, K> extends {
  [_ in K]-?: T[K];
}
  ? false
  : true;
