import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  items: Product[] = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit() {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  deleteItem(product: Product) {
    // Delete item from cart
    this.cartService.deleteItem(product);

    // Update the cart state
    this.items = this.cartService.getItems();

    window.alert(product.name + ' has been removed from the cart.');
  }

  ngOnInit(): void {}
}
