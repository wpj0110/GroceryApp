import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GroceryState, UserState } from './reducers';

export const selectGroceryState = createFeatureSelector<GroceryState>('groceryState')
export const selectUserState = createFeatureSelector<GroceryState>('userState')
export const selectAllGroceryState = createSelector(
  selectGroceryState,
  (state: GroceryState) => {
    //console.log('state is ',state);
    return state}
);
export const selectAllUserState = createSelector(
  selectUserState,
  (state: UserState) => {
    //console.log('state is ',state);
    return state}
);
