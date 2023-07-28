import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AllActions from "./actions";
import { GroceryService } from "../../service/grocery-service.service"
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectAllGroceryState } from "./selectors";
import { AppState } from ".";

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
                    // Take the returned value and return a new success action containing the todos
                    map((items) => AllActions.loadGrocerySuccess({ items: items})),
                    // Or... if it errors return a new failure action containing the error
                    catchError((error) => of(AllActions.loadGroceryFailure({ error })))
                )
            )
        )
    );
}
