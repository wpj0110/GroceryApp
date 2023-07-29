import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GroceryState } from './reducers';

export const selectGroceryState = createFeatureSelector<GroceryState>('groceryState')
export const selectAllGroceryState = createSelector(
  selectGroceryState,
  (state: GroceryState) => {
    console.log('state is ',state);

    return state}
);
