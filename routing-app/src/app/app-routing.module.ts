import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: 'main', component: FirstComponentComponent},
  {path: 'second', component: SecondComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
