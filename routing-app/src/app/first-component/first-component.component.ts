import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroceryItem } from '../model/grocery-item';
import { GroceryServiceService } from '../service/grocery-service.service';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { InitializeItemState } from '../store/actions/actions';
import { myReducer } from '../store/reducers/reducers';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnDestroy {

  groceryItems: GroceryItem[] = [];
  grocerySubscription$: Subscription = new Subscription;
  
  constructor(public store: Store<{groceryState: GroceryItem[]}>, public groceryService: GroceryServiceService) {
  }

  ngOnInit() {
    this.grocerySubscription$ = this.groceryService.findAll().subscribe(data => {
      this.groceryItems = data;
      this.store.dispatch(new InitializeItemState(this.groceryItems));
    });
    //this.store.select(getStateGroceryItems)
  }

  ngOnDestroy(): void {
    this.grocerySubscription$.unsubscribe();
  }
  

}
