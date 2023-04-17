import { GroceryItem } from "src/app/model/grocery-item";
import { ActionsUnion, AddToCart, ActionTypes, InitializeItemState } from "../actions/actions";
import { createReducer, on } from "@ngrx/store";
import { Action } from "rxjs/internal/scheduler/Action";

export interface GroceryState {
    itemList: GroceryItem[]
}

export const initialState: GroceryState = {
    itemList: []
};

export const groceryReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);

/////previous implementation below
// export const trueReducer = (state: GroceryState, action: ActionsUnion) => {
//     return myReducer(state,action);
// }

// export function myReducer(state: GroceryState = initialState, action: ActionsUnion) {
//     switch (action.type) {
//         case ActionTypes.ADD_TO_CART:
//             if(isAddToCart(action)){
//                 return {...state, }
//                 // return [
//                 //     ...state.itemList,
//                 //     state.itemList[]:  //todo: if state id is same as payload id...
//                 // ]
//             }
//             break;
//         case ActionTypes.INITIALIZE_ITEM_STATE:
//             if(isInitializeItemState(action)) {
//                 return state;
//             }

//         default:
//             return state;
//     }
// }

// function isAddToCart(action: ActionsUnion): action is AddToCart {
//     return action && action.type === ActionTypes.ADD_TO_CART;
// }

// function isInitializeItemState(action: ActionsUnion): action is InitializeItemState {
//     return action && action.type === ActionTypes.INITIALIZE_ITEM_STATE;
// }
// // export const reducer = createReducer(
// //     initialState,
// //     on(
// //         Action.addToCart
// //     )
    
// // )