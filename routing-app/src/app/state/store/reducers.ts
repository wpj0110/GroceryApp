import { GroceryItem } from "src/app/model/grocery-item";
import * as AllActions from "./actions";
import { createReducer, on } from '@ngrx/store';
import { UserCart } from "src/app/model/user-cart";

export interface GroceryState {
  items: GroceryItem[];
  cart: GroceryItem[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
};


export const initialGroceryState: GroceryState = {
  items: [],
  cart: [],
  error: '',
  status: 'pending'
};

export const GroceryReducer = createReducer(
  initialGroceryState,
  on(AllActions.loadGrocerySuccess, (state, {items}) => ({
    ...state, items: items, status: 'success'
  })),
  on(AllActions.loadGroceryFailure, (state, {error}) => ({
    ...state, error: error, status: 'error'
  }))
);

export interface UserState {
  cart: UserCart[];
};


export const initialUserState: UserState = {
  cart: [],
};

export const UserReducer = createReducer(
  initialUserState,
  on(AllActions.addToCart, (state, { item }) => {
    const index = state.cart.findIndex(cartItem => cartItem.itemId === item.itemId);

    if (index < 0){
      return {...state, cart: [...state.cart, item]}
    } else if (index >= 0) {
      const newCart = state.cart.map((cartItem, i) => {
        if (i === index) {
          return {...cartItem, cartCount: cartItem.cartCount + item.cartCount}
        }
        return cartItem;
      });
      return {...state, cart: newCart}
    }
    return state
  }),
)

