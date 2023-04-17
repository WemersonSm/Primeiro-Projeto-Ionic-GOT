import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Continents } from '../continents';

@Injectable({
  providedIn: 'root'
})
export class ListcontinentsService {

  readonly URL = "https://thronesapi.com/api/v2/";
  readonly RECURSO = "Continents";

  constructor(private http: HttpClient) { }

  listContinent(): Observable<Continents[]> {
    return this.http.get<Continents[]>(this.URL + this.RECURSO)
  }
}
