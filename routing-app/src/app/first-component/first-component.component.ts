import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroceryItem } from '../model/grocery-item';
import { Store } from '@ngrx/store';
import { loadGrocery } from '../state/store/actions';
import { selectAllGroceryState } from '../state/store/selectors';
import { Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnDestroy {
  groceryItems: GroceryItem[] = [];
  private destroy$ = new Subject();


  
  constructor(public store: Store) {
  };
  

  ngOnInit() {
    //this.store.dispatch(loadGrocery());
    this.store.select(selectAllGroceryState).pipe(takeUntil(this.destroy$)).subscribe(groceryState => {
      if(groceryState.items.length === 0) {
        this.store.dispatch(loadGrocery());
      } else {
        this.groceryItems = groceryState.items;
        console.log(this.groceryItems);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next;
    this.destroy$.complete();
  }
}
