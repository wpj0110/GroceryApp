import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatRadioModule } from '@angular/material/radio'

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { GroceryRowComponent } from './first-component/grocery-row/grocery-row.component';
import { trueReducer } from './store/reducers/reducers';

//import { groceryRowReducer } from './first-component/grocery-row/grocery-row.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    CheckoutComponent,
    GroceryRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatRadioModule,
    StoreModule.forRoot({ 
      reducer: trueReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
