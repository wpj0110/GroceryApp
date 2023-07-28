import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroceryItem } from '../model/grocery-item';
import { Store } from '@ngrx/store';
import { loadGrocery } from '../state/store/actions';
import { selectAllGroceryState } from '../state/store/selectors';
import { GroceryState } from '../state/store/reducers';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnDestroy {
  groceryItems: GroceryItem[] = [];


  
  constructor(public store: Store) {
  };
  

  ngOnInit() {
    this.store.dispatch(loadGrocery());
    this.store.select(selectAllGroceryState).subscribe(groceryState => {
      this.groceryItems = groceryState.items;
      console.log(this.groceryItems);
    });
  }

  ngOnDestroy(): void {
  }
}
