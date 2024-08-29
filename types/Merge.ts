import { OptionalKeys } from "./OptionalKeys";
import { RequiredKeys } from "./RequiredKeys";

export type MergeTwo<A extends {}, B extends {}> = {
  [Key in RequiredKeys<A> & RequiredKeys<B> & keyof any]: B[Key];
} & {
  [Key in RequiredKeys<A> & OptionalKeys<B> & keyof any]: A[Key] | B[Key];
} & {
  [Key in Exclude<RequiredKeys<A>, keyof B> & keyof any]: A[Key];
} & {
  [Key in OptionalKeys<A> & RequiredKeys<B> & keyof any]: B[Key];
} & {
  [Key in OptionalKeys<A> & OptionalKeys<B> & keyof any]?: A[Key] | B[Key];
} & {
  [Key in Exclude<OptionalKeys<A>, keyof B> & keyof any]?: A[Key];
} & {
  [Key in Exclude<RequiredKeys<B>, keyof A> & keyof any]: B[Key];
} & {
  [Key in Exclude<OptionalKeys<B>, keyof A> & keyof any]?: B[Key];
};
