import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  productList:any = [];

  // Json data path
  private _jsonURL = 'assets/json/data.json';

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit() {
    this.getProductList().subscribe(data => {
      this.productList = data.carouselData;
      console.log(this.productList);
    });
  }

  public getProductList(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  addToCart(product:any) {
    this.cartService.addToCart(product);
  }

}
