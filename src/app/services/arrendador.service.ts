import {inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environmet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Arrendador} from '../model/arrendador';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {

  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)
  constructor() { }
  getArrendadores(): Observable<Arrendador[]> {
    return this.http.get<Arrendador[]>(this.url+ "/arrendadores");
  }

  postArrendadores(arrendador: Arrendador): Observable<any> {
    return this.http.post<Arrendador[]>(this.url+ "/arrendador", arrendador);
  };

  putArrendaor(arrendador: Arrendador): Observable<any> {
    return this.http.put(this.url+ "/arrendador", arrendador);
  }
  deleteArrendador(id: number): Observable<any> {
    return this.http.delete(this.url+ "/arrendador/" + id);
  }

  buscarArrendadorId(id: number): Observable<any> {
    console.log(this.url + "/arrendador/" + id)
    return this.http.get<Arrendador[]>(this.url + "/arrendador/" + id);
  }
}
