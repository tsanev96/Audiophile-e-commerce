import { Action, ProductActions } from "../actions/productActions";

export type ProductReducerState = {
  quantity: number;
  price: number;
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
        price: payload * incrementedQuantity,
      };

    case ProductActions.Decrement:
      const decrementedQuantity = quantity === 1 ? quantity : quantity - 1;
      return {
        ...state,
        quantity: decrementedQuantity,
        price: payload * decrementedQuantity,
      };
    case ProductActions.AddToCart:
      return state;
  }
};
