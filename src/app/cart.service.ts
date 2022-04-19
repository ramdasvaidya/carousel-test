import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ProductComponent } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items: any = [];

  addToCart(product: any) {
    this.items.push(product);
    console.log(product);
  }

  getItems() {
    console.log(this.items);
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}