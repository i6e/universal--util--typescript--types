export type Option<T> = None | Some<T>;

export interface None {
  type: 'none';
}

export interface Some<T> {
  type: 'some';
  value: T;
}

export const none: None = { type: 'none' };

export function some<T>(value: T): Option<T> {
  return { type: 'some', value };
}

export function fromOptional<T>(value: T | null | undefined): Option<T> {
  return value === null || value === undefined ? none : some(value);
}

export class UnwrapFailError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'UnwrapFailError';
  }
}

export function unwrapOption<T>(option: Option<T>): T {
  if (option.type !== 'some') throw new UnwrapFailError();
  return option.value;
}
