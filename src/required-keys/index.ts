export type RequiredKeys<
T extends Record<string | number | symbol, unknown>,
K extends keyof T,
> = Omit<T, K> & Required<Pick<T, K>>;
