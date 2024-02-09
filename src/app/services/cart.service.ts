import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    productAdded: Product[] = [];



    addToCart(product: Product): boolean {
        this.productAdded.push(product);
        return true
    }

    products(): Product[] {
        return this.productAdded
    }
}