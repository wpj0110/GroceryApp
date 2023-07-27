import { GroceryItem } from "src/app/model/grocery-item";
import * as AllActions from "../actions/actions";
import {ActionReducer, Action, createSelector, createReducer, on, State} from '@ngrx/store';


//reference: https://v8.ngrx.io/guide/store/reducers//////////
// export interface TestState {
//   testItems: number;
// }
// export const testInitialState: TestState = {
//   testItems: 0,
// }

// export function testDummyReducer(state: TestState = testInitialState, action: AllActions.ActionsUnion) {
//   switch(action.type) {
//     case 
//   }
//   on(AllActions.testAction, (state) => ({ ...state, testItems: state.testItems + 1})),
// }

// export function testReducer(state: TestState, action: Action) {
//   return testDummyReducer(state, action);
// }
////////////////////////////////////////////////////////////////////////

export interface GroceryState {
  items: GroceryItem[];
}


export const initialState: GroceryState = {
  items: [{itemId: -1, itemName: '', itemPrice: 0, itemType: ''}],
}

function isInitializeItemState(action: Action): action is AllActions.InitializeItemState  {
  return action && action.type === AllActions.ActionTypes.INITIALIZE_ITEM_STATE;
}

export function myReducer(state:GroceryState = initialState, action: Action) {
  console.log("reducer gets hit");
  switch(action.type) {
    case AllActions.ActionTypes.INITIALIZE_ITEM_STATE:
      if(isInitializeItemState(action)) {
        return [...action.payload];
      }
      return state;
    default:
      return state;
  }
}

export const selectGroceryState = (state: GroceryState)  => state;

export const selectGroceryItems = createSelector(selectGroceryState, (state:GroceryState) => state.items)



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