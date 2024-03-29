import { createAction, props } from "@ngrx/store";
import { GroceryItem } from "src/app/model/grocery-item";
import { UserCart } from "src/app/model/user-cart";


export const addToCart = createAction(
    '[UserState] Add To Cart',
    props<{item: UserCart}>()
)

export const loadGrocery = createAction('[GroceryState] Load Grocery');

export const loadGrocerySuccess = createAction(
    '[GroceryState] Load Grocery Success',
    props<{items: GroceryItem[]}>()
);

export const loadGroceryFailure = createAction(
    '[GroceryState] Load Grocery Failure',
    props<{error: string}>()
);
