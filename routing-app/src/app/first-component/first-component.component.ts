import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroceryItem } from '../model/grocery-item';
import { GroceryServiceService } from '../service/grocery-service.service';
import { Observable, Subscription } from 'rxjs';
import { GroceryState } from '../store/reducers/reducers';
import { Store } from '@ngrx/store';
import { InitializeItemState } from '../store/actions/actions';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnDestroy {

  groceryItems: GroceryItem[] = [];
  grocerySubscription$: Subscription = new Subscription;
  
  constructor(public store: Store<{groceryState: GroceryState}>, private groceryService: GroceryServiceService) {}

  ngOnInit() {
    this.grocerySubscription$ = this.groceryService.findAll().subscribe(data => {
      this.groceryItems = data;
      this.store.dispatch(new InitializeItemState(this.groceryItems));
    });
    
  }

  ngOnDestroy(): void {
    this.grocerySubscription$.unsubscribe();
  }
  

}
