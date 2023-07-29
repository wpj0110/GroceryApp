import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GroceryRowComponent } from './first-component/grocery-row/grocery-row.component';
import { EffectsModule } from '@ngrx/effects';
// import { trueReducer } from './store/reducers/reducers';

//import { groceryRowReducer } from './first-component/grocery-row/grocery-row.reducer';
import { GroceryReducer } from './state/store/reducers';
import { GroceryEffects } from './state/store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    GroceryRowComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({'groceryState': GroceryReducer}),
    EffectsModule.forRoot([GroceryEffects, ]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
