import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from 'src/app/views/pages/products/products.component';
import { ProductListComponent } from '../product-list/product-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent, children: [ {path: 'products', component: ProductListComponent}]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
