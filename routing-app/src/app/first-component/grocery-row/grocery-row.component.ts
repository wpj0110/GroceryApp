import { Component, Input } from '@angular/core';
import { GroceryItem } from 'src/app/model/grocery-item';
import Utils from '../../helpers/utils'
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/state/store/actions';

@Component({
  selector: 'app-grocery-row',
  templateUrl: './grocery-row.component.html',
  styleUrls: ['./grocery-row.component.css']
})

export class GroceryRowComponent {

  @Input()
  groceryItem!: GroceryItem;

  itemAddRemoveCount: number = 0; //todo: might check on store

  constructor(public store: Store) {
  };

  onInputChange(event: any) {
    let newValue = event.target.value.replace(/[^0-9]/g, ''); // use regex to remove non-numeric characters
    if (newValue.length === 0) {
      newValue = '0';
      event.target.value = newValue;
      this.itemAddRemoveCount = 0;
    }
    else {
      let inputVal : string = newValue;
      event.target.value = Utils.replaceInputNumber(inputVal);
      this.itemAddRemoveCount = parseInt(newValue);
    }
  }

  decrement() {
    if (this.itemAddRemoveCount > 0) {
      this.itemAddRemoveCount = Utils.decrementWholeNumber(this.itemAddRemoveCount);
    }
  }

  increment() {
    this.itemAddRemoveCount = Utils.incrementWholeNumber(this.itemAddRemoveCount);
  }

  addToCart() {
    if (this.itemAddRemoveCount > 0) {
      this.store.dispatch(addToCart({item: {itemId: this.groceryItem.itemId, cartCount: this.itemAddRemoveCount}}))
      this.itemAddRemoveCount = 0;
    }
  }
}


