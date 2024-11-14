import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import {VerInmuebleComponent} from './ver-inmueble/ver-inmueble.component';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-listar-inmuebles',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatExpansionModule,
    VerInmuebleComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './listar-inmuebles.component.html',
  styleUrl: './listar-inmuebles.component.css'
})
export class ListarInmueblesComponent {

}
