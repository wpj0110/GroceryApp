//reference: https://stackoverflow.com/questions/66165872/types-of-parameters-action-and-action-are-incompatible-property-payload-i
import { GroceryState} from './reducers';
import { ActionReducerMap } from '@ngrx/store';


export const rootReducer = {};

export interface AppState {
    items: GroceryState;
};