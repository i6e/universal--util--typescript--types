export type IsSameType<A, B, T = true, F = never> = (<T>() => T extends A
  ? 0
  : 1) extends <T>() => T extends B ? 0 : 1
  ? T
  : F;
