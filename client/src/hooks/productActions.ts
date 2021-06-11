import React, { useState } from "react";
import { ProductActions } from "../actions/productActions";

type Action = {
  type: ProductActions;
  payload: number;
};

type State = {
  quantity: number;
  price: number;
};
