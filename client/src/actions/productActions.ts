export enum ProductActions {
  Increment,
  Decrement,
}

export type Action = {
  type: ProductActions;
  payload: number;
};
