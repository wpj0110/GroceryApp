import { Component, OnDestroy, OnInit } from '@angular/core';
import { GroceryItem } from '../model/grocery-item';
import { GroceryServiceService } from '../service/grocery-service.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnDestroy {

  groceryItems: GroceryItem[];
  grocerySubscription$: Subscription;
  
  constructor(private groceryService: GroceryServiceService) {}

  ngOnInit() {
    this.grocerySubscription$ = this.groceryService.findAll().subscribe(data => {
      //this.groceryItems = data;
      console.log(data)
    });
    //console.log("this.groceryItems is: ", this.groceryItems);
  }

  ngOnDestroy(): void {
    this.grocerySubscription$.unsubscribe();
  }
  

}
