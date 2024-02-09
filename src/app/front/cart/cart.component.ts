import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],

})
export class CartComponent implements OnInit {
  cartProducts: Product[]
  constructor(private cartService: CartService,
    private productService: ProductService
    ) { }

  ngOnInit(): void {
    this.cartProducts =  this.cartService.products()
    
  }

}
