import { createAction, props } from "@ngrx/store";
import { GroceryItem } from "src/app/model/grocery-item";

export const testAction = createAction(
    '[Grocery Row] ADD_TO_CART', 
    props<{item: number}>()
);

export const addToCart = createAction(
    '[Grocery State] Add To Cart',
    props<{item: GroceryItem}>()
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
