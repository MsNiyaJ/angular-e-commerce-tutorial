import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  items: Product[] = this.cartService.getItems();

  deleteItem(product: Product) {
    this.cartService.deleteItem(product);
    window.alert(product.name + ' has been removed from the cart.');
  }

  ngOnInit(): void {}
}
