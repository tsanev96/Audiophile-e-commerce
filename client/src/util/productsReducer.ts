import { Action, ProductActions } from "../actions/productActions";

export type ProductReducerState = {
  quantity: number;
  total: number;
};

export const productsReducer = (
  state: ProductReducerState,
  action: Action
): ProductReducerState => {
  const { type, payload } = action;
  const { quantity } = state;

  switch (type) {
    case ProductActions.Increment:
      const incrementedQuantity = quantity + 1;
      return {
        ...state,
        quantity: incrementedQuantity,
        total: payload * incrementedQuantity,
      };

    case ProductActions.Decrement:
      const decrementedQuantity = quantity === 1 ? quantity : quantity - 1;
      return {
        ...state,
        quantity: decrementedQuantity,
        total: payload * decrementedQuantity,
      };
  }
};
