import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Variety } from '../model/variety';

@Injectable({
  providedIn: 'root'
})
export class VarietyService {

  @Output() newVariety : EventEmitter<Variety> = new EventEmitter();
  apiUrl = environment.varietyUrl;

  constructor(private http: HttpClient) { }

  fetchVarieties(): Observable<Variety[]>{
    return this.http.get<Variety[]>(this.apiUrl);
  }

  addVariety(variety: Variety):Observable<Variety>{
    return this.http.post<Variety>(this.apiUrl, variety);
  }

  editVariety(variety: Variety): Observable<Variety>{
    return this.http.put<Variety>(this.apiUrl +'/'+ variety.idVariety, variety);
  }

  emitting(variety: Variety){
    this.newVariety.emit(variety);
  }

  deleteVariety(id: number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
