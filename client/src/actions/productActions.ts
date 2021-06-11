export enum ProductActions {
  Increment,
  Decrement,
  AddToCart,
}

export type Action = {
  type: ProductActions;
  payload: number;
};
