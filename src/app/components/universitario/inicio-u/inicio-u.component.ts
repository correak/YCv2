import { Component } from '@angular/core';
import {CarruselUniversidadesUComponent} from '../carrusel-universidades-u/carrusel-universidades-u.component';
import {CarruselDestacadosUComponent} from '../carrusel-destacados-u/carrusel-destacados-u.component';
import {Pag2Component} from '../pag2/pag2.component';

@Component({
  selector: 'app-inicio-u',
  standalone: true,
  imports: [
    CarruselUniversidadesUComponent,
    CarruselDestacadosUComponent,
    Pag2Component
  ],
  templateUrl: './inicio-u.component.html',
  styleUrl: './inicio-u.component.css'
})
export class InicioUComponent {

}
