import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  @Output() emittedCategory: EventEmitter<Category> = new EventEmitter();

  apiUrl = environment.categoryUrl;

  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }

  addCategory(category: Category): Observable<Category>{
    return this.http.post<Category>(this.apiUrl, category)
  }

  emitting(category: Category){
    this.emittedCategory.emit(category);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.apiUrl + '/' + id)
  }

  editCategory(category: Category): Observable<Category>{
    console.log(category)
    return this.http.put<Category>(this.apiUrl + category.idCategory, category)
  }
}
