import { GroceryItem } from "src/app/model/grocery-item";
import * as AllActions from "./actions";
import { createReducer, on } from '@ngrx/store';

export interface GroceryState {
  items: GroceryItem[];
  cart: GroceryItem[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
};


export const initialState: GroceryState = {
  items: [],
  cart: [],
  error: '',
  status: 'pending'
};

export const GroceryReducer = createReducer(
  initialState,
  on(AllActions.addToCart, (state, { item }) => ({
    ...state, cart: [...state.cart, item]
  })),
  on(AllActions.loadGrocerySuccess, (state, {items}) => ({
    ...state, items: items
  })),
  on(AllActions.loadGroceryFailure, (state, {error}) => ({
    ...state, error: error
  }))
);
