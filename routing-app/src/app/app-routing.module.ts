import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: 'main', component: FirstComponentComponent},
  {path: 'second', component: SecondComponentComponent},
  {path: 'checkout', component: CheckoutComponent},
  { path: '**', redirectTo: '/main' } // Redirect to 'main' if the URL doesn't match any of the defined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
