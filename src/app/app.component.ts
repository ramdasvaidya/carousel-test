import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'carousel-test';
  productList:any = [];

  // Json data path
  private _jsonURL = 'assets/json/data.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getProductList().subscribe(data => {
      this.productList = data.carouselData;
      console.log(this.productList);
    });
  }

  public getProductList(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
