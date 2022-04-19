import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  products = this.cartService.getItems();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.products);
  }

}
