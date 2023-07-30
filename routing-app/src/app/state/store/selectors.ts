import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { GroceryState, UserState } from './reducers';

export const selectGroceryState = createFeatureSelector<GroceryState>('groceryState')
export const selectUserState = createFeatureSelector<UserState>('userState')
export const selectAllGroceryState = createSelector(
  selectGroceryState,
  (state: GroceryState) => {
    return state;
  }
);

export const selectGroceryItemMap = createSelector(
  selectAllGroceryState,
  (state: GroceryState) => {
    return state.itemMap;
  }
)

export const selectAllUserState = createSelector(
  selectUserState,
  (state: UserState) => {
    return state}
);

export const selectUserStateCart = createSelector(
  selectAllUserState,
  (state: UserState) => {
    return state.cart;
  }
)
