import { createReducer, on } from '@ngrx/store';
import { addToCart } from './grocery-row.actions';

// export const groceryRowReducer = createReducer(
//     initialState,
//     on(increment, (state) => state + 1),
//     on(decrement, (state) => state - 1),
//     on(reset, (state) => 0)
//   );