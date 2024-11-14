import {inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environmet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reserva} from '../model/reserva';
import {HU4Dto} from '../model/hu4-dto';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)
  constructor() { }
  getReserva(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.url+ "/reservas");
  }

  postReserva(reserva: Reserva): Observable<Reserva> {
    return this.http.post<Reserva>(`${this.url}/reserva`, reserva);
  }
  getReservasPorUniversitario(universitarioId: number): Observable<HU4Dto[]> {
    return this.http.get<HU4Dto[]>(`${this.url}/reservas/universitario/${universitarioId}`);
  }

}
