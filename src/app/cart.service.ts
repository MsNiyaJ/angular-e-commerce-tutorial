import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  items: Product[] = [];

  // Add an item to cart
  addToCart(product: Product) {
    this.items.push(product);
  }

  // Delete an item from the cart
  deleteItem(product: Product) {
    this.items = this.items.filter((item) => item.id !== product.id);
  }

  // Get all items in the cart
  getItems() {
    return this.items;
  }

  // Get shipping prices of items in the cart
  getShippingPrices() {
    // Uses the HttpClient get() method to retrieve shipping prices as a stream
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  // Remove all items from the cart
  clearCart() {
    return (this.items = []);
  }
}
