import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {NavbarArrendadorComponent} from '../navbar/navbar-arrendador/navbar-arrendador.component';
import {ListarInmueblesComponent} from './listar-inmuebles/listar-inmuebles.component';
import {VerInmuebleComponent} from './listar-inmuebles/ver-inmueble/ver-inmueble.component';
import {CarruselUniversidadesComponent} from './carrusel-universidades/carrusel-universidades.component';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {CarruselDestacadosComponent} from './carrusel-destacados/carrusel-destacados.component';
import {FooterComponent} from './footer/footer.component';
import {Pag1Component} from './pag1/pag1.component';

@Component({
  selector: 'app-arrendador',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NavbarArrendadorComponent,
    ListarInmueblesComponent,
    VerInmuebleComponent,
    CarruselUniversidadesComponent,
    MatCardModule,
    CarruselDestacadosComponent,
    FooterComponent,
    Pag1Component
  ],
  templateUrl: './arrendador.component.html',
  styleUrl: './arrendador.component.css'
})
export class ArrendadorComponent {
  constructor(private router: Router) {}

}
