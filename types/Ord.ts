import { CompareResult } from "./CompareResult";

export interface Ord<T> {
  compare: (x: T, y: T) => CompareResult;
}
