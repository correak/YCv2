import {inject, Injectable} from '@angular/core';
import {environment} from '../../environments/environmet';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Universitario} from '../model/universitario';

@Injectable({
  providedIn: 'root'
})
export class UniversitarioService {

  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)
  constructor() { }
  getUniversitarios(): Observable<Universitario[]> {
    return this.http.get<Universitario[]>(this.url+ "/universitarios");
  }

  postUniversitario(universitario: Universitario): Observable<Universitario> {
    return this.http.post<Universitario>(`${this.url}/universitario`, universitario);
  }
  getUniversitarioById(id: number): Observable<Universitario> {
    return this.http.get<Universitario>(`${this.url}/universitarios/${id}`);
  }
  updateUniversitario(universitario: Universitario): Observable<Universitario> {
    return this.http.put<Universitario>(`${this.url}/universitario`, universitario);
  }

}
