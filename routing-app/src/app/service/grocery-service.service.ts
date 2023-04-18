import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GroceryItem } from '../model/grocery-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  private groceryUrl: string;

  constructor(private http: HttpClient) {
    this.groceryUrl = 'http://localhost:8080';
  }

  public findAll(): Observable<GroceryItem[]> {
    return this.http.get<GroceryItem[]>(this.groceryUrl + '/items');
  }

}

  // public save(item: GroceryItem) {
  //   return this.http.post<GroceryItem>(this.groceryUrl + '/items', item);
  // }
