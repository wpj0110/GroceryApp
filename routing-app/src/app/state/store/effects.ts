import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AllActions from "./actions";
import { GroceryService } from "../../service/grocery-service.service"
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllGroceryState } from "./selectors";
import { AppState } from '../app.state'; 

@Injectable()
export class GroceryEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private groceryService: GroceryService
    ) {}
    
    loadGrocery$ = createEffect(() =>
    this.actions$.pipe(
        ofType(AllActions.loadGrocery),
            switchMap(() =>
                from(this.groceryService.findAll()).pipe(
                    map((items) => {
                        console.log(items);
                        return AllActions.loadGrocerySuccess({ items: items});}),
                    catchError((error) => of(AllActions.loadGroceryFailure({ error })))
                )
            )
        )
    );

//     yourActionSuccess$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(AllActions.loadGrocerySuccess), // Replace with your actual action type
//       tap(() => {
//         // This block of code will be executed when your action is triggered successfully
//         console.log('Your action was triggered successfully!');
//         // You can perform other side effects or actions here
//       }),
//       map(() => ({ type: '[Empty Action]' })) // You can dispatch another action after success if needed
//     )
//   );
}
