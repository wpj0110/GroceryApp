import { GroceryItem } from "src/app/model/grocery-item";
import { AddToCart, ActionTypes, InitializeItemState, ActionsUnion } from "../actions/actions";
import {ActionReducer, Action, createSelector} from '@ngrx/store';

export interface GroceryState {
  items?: GroceryItem[];
}

export const initialState: GroceryState = {
  items: []
}


function isInitializeItemState(action: Action): action is InitializeItemState  {
  return action && action.type === ActionTypes.INITIALIZE_ITEM_STATE;
}

export function myReducer(state = initialState, action: ActionsUnion) {
  switch(action.type) {
    case ActionTypes.INITIALIZE_ITEM_STATE:
      if(isInitializeItemState(action)) {
        // return {
        //   ...state,
        //   state: action.payload.forEach(item => {
        //     state.push(item)
        //   })
        // };
        return [...action.payload];
      }
      return state;
    default:
      return state;
  }
}

//export const getStateGroceryItems = createSelector(state, )

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




/////new backup below
// import { GroceryItem } from "src/app/model/grocery-item";
// import { ActionsUnion, AddToCart, ActionTypes, InitializeItemState } from "../actions/actions";
// import { createReducer, on } from "@ngrx/store";
// import { Action } from "rxjs/internal/scheduler/Action";

// export class GroceryState {
//     itemMap: any = new Object();

//     constructor(data: any) {
//       Object.assign<GroceryState, any>(this, data);
//     }
// }

// export const initialState: GroceryState = new GroceryState({
//   itemMap: {}
// });

// function isAddToCart(action: ActionsUnion): action is AddToCart  {
//   return action && action.type === ActionTypes.ADD_TO_CART;
// }

// function isInitializeItemState(action: ActionsUnion): action is InitializeItemState  {
//   return action && action.type === ActionTypes.INITIALIZE_ITEM_STATE;
// }

// export function reducer(state = initialState, action: ActionsUnion): GroceryState {
//   switch(action.type) {
//     // case ActionTypes.ADD_TO_CART:
//     //   if(isAddToCart(action)) {
//     //     return new GroceryState( {
//     //       ...state,
//     //       itemMap: action.payload.array.forEach(item => {
            
//     //       });
//     //     });
//     //   }
//     case ActionTypes.INITIALIZE_ITEM_STATE:
//       if(isInitializeItemState(action)) {
//         return new GroceryState( {
//           ...state,
//           itemMap: action.payload.forEach(item => {
//             state.itemMap[item.itemId] = {itemName: item.itemName, itemType: item.itemType, isEdible: item.isEdible, itemPrice: item.itemPrice, cartCount: item.cartCount}
//           })
//         });
//       }
//     default:
//       return state;
//   }

// }