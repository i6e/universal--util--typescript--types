export type IsRequiredKey<T, K extends keyof T> = Pick<T, K> extends {
  [_ in K]-?: T[K];
}
  ? true
  : false;
