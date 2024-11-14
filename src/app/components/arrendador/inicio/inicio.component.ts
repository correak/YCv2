import { Component } from '@angular/core';
import {CarruselDestacadosComponent} from "../carrusel-destacados/carrusel-destacados.component";
import {CarruselUniversidadesComponent} from "../carrusel-universidades/carrusel-universidades.component";
import {Pag1Component} from "../pag1/pag1.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
    imports: [
        CarruselDestacadosComponent,
        CarruselUniversidadesComponent,
        Pag1Component
    ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
