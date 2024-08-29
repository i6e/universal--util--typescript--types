import { IsRequiredKey } from "./IsRequiredKey";

export type RequiredKeys<T> = {
  [K in keyof T]: IsRequiredKey<T, K> extends true ? K : never;
}[keyof T];
