import { IsOptionalKey } from "./IsOptionalKey";

export type OptionalKeys<T> = {
  [K in keyof T]: IsOptionalKey<T, K> extends true ? K : never;
}[keyof T];
