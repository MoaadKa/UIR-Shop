import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { LayoutModule } from './views/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';

import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ProductsComponent } from './views/pages/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './views/pages/products/products.module';
import { CategoryComponent } from './views/pages/category/category.component';
import { AddCategoryComponent } from './views/pages/add-category/add-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VarietyComponent } from './views/pages/variety/variety.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './front/home/home.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { ProductListComponent } from './front/product-list/product-list.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ProductsComponent,
    CategoryComponent,
    AddCategoryComponent,
    VarietyComponent,
    HomeComponent,
    NavbarComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    CarouselModule,
    TagModule,
    CardModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
