import { GroceryItem } from "src/app/model/grocery-item";
import * as AllActions from "./actions";
import { createReducer, on } from '@ngrx/store';
import { UserCart } from "src/app/model/user-cart";
import { GroceryItemMap } from "src/app/model/grocery-item-map";

export interface GroceryState {
  itemMap: GroceryItemMap;
  error: string;
  status: string;
};


export const initialGroceryState: GroceryState = {
  itemMap: new Map<number,GroceryItem>(),
  error: '',
  status: 'pending'
};

export const GroceryReducer = createReducer(
  initialGroceryState,
  on(AllActions.loadGrocerySuccess, (state, {items}) => {
    let tempMap: GroceryItemMap = new Map<number,GroceryItem>();
    items.forEach(item => tempMap.set(item.itemId, item));
    return {...state, itemMap: tempMap, status: 'success'}
  }),
  on(AllActions.loadGroceryFailure, (state, {error}) => {
    return {...state, error: error, status: "error"};
  })
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

