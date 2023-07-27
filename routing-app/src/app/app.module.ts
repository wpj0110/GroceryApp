import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ActionReducerMap, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GroceryRowComponent } from './first-component/grocery-row/grocery-row.component';
import * as AllReducers from './store/reducers/reducers';
// import { trueReducer } from './store/reducers/reducers';

//import { groceryRowReducer } from './first-component/grocery-row/grocery-row.reducer';

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
    StoreModule.forRoot(AllReducers.myReducer)
  ],
  providers: [] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
