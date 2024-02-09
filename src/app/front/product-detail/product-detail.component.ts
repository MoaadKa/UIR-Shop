import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productDetails: Product; 
  productId: number;
  largeImage: string = '';

  constructor(route: ActivatedRoute, private productService: ProductService) {
    let paramsId = route.snapshot.params['id'];
    this.productId = paramsId
  }


  ngOnInit() {
    this.loadProductDetails(this.productId);
  }

  loadProductDetails(productId: number) {
    this.productService.getProductById(productId).subscribe(
      (product) => {
        this.productDetails = product;
       
        if (product.imgs && product.imgs.length > 0) {
          this.largeImage = product.imgs[0];
        }
          console.log(this.productDetails)
        
      }
    );
  }
  changeLargeImage(index: number) {
    if (this.productDetails.imgs && this.productDetails.imgs.length > index) {
      this.largeImage = this.productDetails.imgs[index];
    }
  }
  
}
