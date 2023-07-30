import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllGroceryState, selectGroceryItemMap, selectUserStateCart } from '../state/store/selectors';
import { pipe, take } from 'rxjs';
import { UserCart } from '../model/user-cart';
import { GroceryItem } from '../model/grocery-item';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})


export class CheckoutComponent implements OnInit{
  userCart: UserCart[] = [];
  groceryItemMap= new Map<number, GroceryItem>();

  constructor(public store: Store){}

  ngOnInit() {
    this.store.select(selectUserStateCart).pipe(take(1)).subscribe(userCart => this.userCart = userCart);
    this.store.select(selectGroceryItemMap).pipe(take(1)).subscribe(groceryItemMap => this.groceryItemMap = groceryItemMap)
  }

  getItem(cartItem: UserCart) {
    return {count: cartItem.cartCount, itemDetails: this.groceryItemMap.get(cartItem.itemId)}
  }
}
