import {inject, Injectable} from '@angular/core';
import {Universidad} from '../model/universidad';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environmet';
import {HttpClient} from '@angular/common/http';
import {Inmueble} from '../model/inmueble';
import {HU15Dto} from '../model/hu15-dto';
import {Reserva} from '../model/reserva';
import {HU10Dto} from '../model/hu10-dto';
import {HU12Dto} from '../model/hu12-dto';
import {HU14Dto} from '../model/hu14-dto';
import {HU16Dto} from '../model/hu16-dto';
import {HU13Dto} from '../model/hu13-dto';
import {HU29Dto} from '../model/hu29-dto';
import {HU18Dto} from '../model/hu18-dto';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)
  constructor() { }
  postInmueble(inmueble: Inmueble): Observable<Inmueble> {
    return this.http.post<Inmueble>(`${this.url}/inmueble`, inmueble);
  }

  getInmueble(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.url+ "/inmuebles");
  }
  getInmueblesOrdenadosPorCalificacion(): Observable<HU15Dto[]> {
    return this.http.get<HU15Dto[]>(this.url+ "/inmuebles/ordenados-por-calificacion");
  }
  getInmuebleById(id: number): Observable<Inmueble> {
    return this.http.get<Inmueble>(`${this.url}/inmueble/${id}`);
  }
  getContactoArrendador(inmuebleId: number): Observable<HU10Dto> {
    return this.http.get<HU10Dto>(`${this.url}/arrendador/contacto/${inmuebleId}`);
  }
  getInmueblesPorUniversidad(nombreUniversidad: string): Observable<HU12Dto[]> {
    return this.http.get<HU12Dto[]>(`${this.url}/inmuebles/por-universidad/${nombreUniversidad}`);
  }
  getInmueblesPorTipo(tipoInmueble: string): Observable<HU14Dto[]> {
    return this.http.get<HU14Dto[]>(`${this.url}/inmuebles/tipo-propiedad/${tipoInmueble}`);
  }

  getInmueblesOrdenadosPorFechaPublicacion(): Observable<HU16Dto[]> {
    return this.http.get<HU16Dto[]>(`${this.url}/inmuebles/ordenados-por-fecha`);
  }
  getInmueblesPorRangoDePrecios(precioMin: number, precioMax: number): Observable<HU13Dto[]> {
    return this.http.get<HU13Dto[]>(`${this.url}/inmuebles/rango-precios/${precioMin}/${precioMax}`);
  }
  // Servicio para obtener inmuebles ordenados por precio ascendente
  getInmueblesOrdenadosPorPrecioAscendente(): Observable<HU29Dto[]> {
    return this.http.get<HU29Dto[]>(`${this.url}/inmuebles/ordenados-por-precio-ascendente`);
  }

  // Obtener inmuebles ordenados por precio descendente
  getInmueblesOrdenadosPorPrecioDescendente(): Observable<HU29Dto[]> {
    return this.http.get<HU29Dto[]>(`${this.url}/inmuebles/ordenados-por-precio-descendente`);
  }

  // Obtener inmuebles por el ID del Arrendador
  getInmueblesPorArrendador(arrendadorId: number): Observable<HU18Dto[]> {
    return this.http.get<HU18Dto[]>(`${this.url}/inmuebles/arrendador/${arrendadorId}`);
  }
}
