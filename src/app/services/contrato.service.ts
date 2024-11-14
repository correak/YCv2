import {inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environmet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contrato} from '../model/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)
  constructor() { }
  getContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.url+ "/contratos");
  }

  postContrato(contrato: Contrato): Observable<any> {
    return this.http.post<Contrato[]>(this.url+ "/contrato", contrato);
  };
}
