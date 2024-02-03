import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = environment.productUrl;
  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl)
  }

}
