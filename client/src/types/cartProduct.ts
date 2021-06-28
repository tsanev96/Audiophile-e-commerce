import { ProductReducerState } from "../util/productsReducer";
import { Product } from "./product";

// export type CartProduct = Product & { quantity: number; total: number };
export type CartProduct = Product & ProductReducerState;
