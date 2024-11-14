import {inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environmet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Universidad} from '../model/universidad';
import {Arrendador} from '../model/arrendador';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)
  constructor() { }

  postUniversidad(universidad: Universidad): Observable<any> {
    return this.http.post<Universidad[]>(this.url+ "/universidad", universidad);
  };

  getUniversidades(): Observable<Universidad[]> {
    return this.http.get<Universidad[]>(this.url+ "/universidades");
  }
}
