import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-item-row',
  templateUrl: './checkout-item-row.component.html',
  styleUrls: ['./checkout-item-row.component.css']
})
export class CheckoutItemRowComponent implements OnInit, OnDestroy{
  @Input()
  checkoutItem: any;

  constructor(){}

  ngOnInit(): void {
      console.log(this.checkoutItem);
  }

  ngOnDestroy(): void {
      
  }

}
