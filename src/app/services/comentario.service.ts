import {inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environmet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comentario} from '../model/comentario';
import {HU8Dto} from '../model/hu8-dto';
import {Reserva} from '../model/reserva';
import {Universitario} from '../model/universitario';
import {HUUniversitarioComentarioDto} from '../model/huuniversitario-comentario-dto';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)
  constructor() { }
  getComentario(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${this.url}/comentarios`);
  }

  // Crea un nuevo comentario en el servidor
  postComentario(comentario: Comentario): Observable<Comentario> {
    return this.http.post<Comentario>(`${this.url}/comentario`, comentario);
  }
  getComentariosPorInmueble(inmuebleId: number): Observable<HU8Dto[]> {
    return this.http.get<HU8Dto[]>(`${this.url}/comentarios/inmueble/${inmuebleId}`);
  }
  getComentariosPorUniversitario(universitarioId: number): Observable<HUUniversitarioComentarioDto[]> {
    return this.http.get<HUUniversitarioComentarioDto[]>(`${this.url}/comentarios/universitario/${universitarioId}`);
  }
}
