export interface Semigroup<T> {
  concat: (x: T, y: T) => T;
}
