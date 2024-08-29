import { Injectable } from '@angular/core';
import { IProducts } from '../interfaces/IProducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: IProducts[] = [];

  constructor() { }

  addProduct(product: IProducts) {
    this.cart.push(product);
  }

  getCartItems(): IProducts[] {
    return this.cart;
  }

  removeFromCart(product: IProducts) {
    this.cart = this.cart.filter(item => item.id !== product.id);
  }

  clearCart() {
    this.cart = [];
  }
}
