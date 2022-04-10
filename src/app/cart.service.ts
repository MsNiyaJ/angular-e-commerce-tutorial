import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: Product[] = [];

  // Add an item to cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Delete an item from the cart
  deleteItem(product: Product) {
    return this.items.filter((item) => item.id !== product.id);
  }

  // Get all items in the cart
  getItems() {
    return this.items;
  }

  // Remove all items from the cart
  clearCart() {
    return (this.items = []);
  }
}
