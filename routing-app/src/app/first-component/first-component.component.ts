import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroceryItem } from '../model/grocery-item';
import { Store } from '@ngrx/store';
import { loadGrocery } from '../state/store/actions';
import { selectAllGroceryState, selectGroceryItemMap } from '../state/store/selectors';
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
    this.store.dispatch(loadGrocery());
    this.store.select(selectGroceryItemMap).pipe(takeUntil(this.destroy$)).subscribe(groceryItemMap=> {
      this.groceryItems = Array.from(groceryItemMap.values());;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next;
    this.destroy$.complete();
  }
}
