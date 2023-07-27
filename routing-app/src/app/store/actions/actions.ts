import { createAction, props } from "@ngrx/store";
import { GroceryItem } from "src/app/model/grocery-item";

export interface Action {
    type: string;
}


export enum ActionTypes {
    ADD_TO_CART = "[Grocery Row] ADD_TO_CART",
    INITIALIZE_ITEM_STATE = "[Grocery Table] INITIALIZE_ITEM_STATE"
}

//export const addToCart = createAction(ADD_TO_CART, props<{payload: GroceryItem}>()); //new way

export class InitializeItemState implements Action {
    readonly type = ActionTypes.INITIALIZE_ITEM_STATE;

    constructor(public payload: GroceryItem[]) {};
}

export class AddToCart implements Action {
    readonly type = ActionTypes.ADD_TO_CART;

    constructor(public payload: {itemId: number, cartCount: number}) {};
}

export const testAction = createAction('[TestAction] Just a Test', props<{item: number}>());

export type ActionsUnion = 
AddToCart|
InitializeItemState;
