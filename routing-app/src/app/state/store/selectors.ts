import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GroceryState } from './reducers'; 

export const selectTodos = (state: AppState) => state.groceryState;
export const selectAllGroceryState = createSelector(
  selectTodos,
  (state: GroceryState) => state
);