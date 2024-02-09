import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  idCategory: number;
  products: Product[];
  
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    route: ActivatedRoute
  ) {
    this.idCategory = route.snapshot.params['id']
  }

  ngOnInit(): void {
    this.productService.getProductByCategory(this.idCategory).subscribe(
      data => {this.products = data
      console.log(data)}
    )
  }

}
