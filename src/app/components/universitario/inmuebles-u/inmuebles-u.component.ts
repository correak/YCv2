import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle} from '@angular/material/expansion';
import {Universidad} from '../../../model/universidad';
import {UniversidadService} from '../../../services/universidad.service';
import {NgForOf} from '@angular/common';
import {HU12Dto} from '../../../model/hu12-dto';
import {InmuebleService} from '../../../services/inmueble.service';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-inmuebles-u',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    RouterOutlet,
    MatButton,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    RouterLink,
    NgForOf,
    FormsModule,
    MatInput
  ],
  templateUrl: './inmuebles-u.component.html',
  styleUrl: './inmuebles-u.component.css'
})
export class InmueblesUComponent {
  universidades: Universidad[] = [];
  sedes: string[] = []; // Para almacenar las sedes disponibles sin duplicados
  inmuebles: HU12Dto[] = [];
  tipoInmueble: string = '';
  precioMin: number = 0;
  precioMax: number = 0;

  constructor(private universidadService: UniversidadService,
  private router: Router,
  private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.obtenerUniversidades();
    this.tipoInmueble = this.route.snapshot.paramMap.get('tipoInmuebleU')!;

  }

  obtenerUniversidades(): void {
    this.universidadService.getUniversidades().subscribe((data: Universidad[]) => {
      this.universidades = data;
      this.extraerSedes();
    });
  }

  extraerSedes(): void {
    // Extraer las sedes de las universidades, eliminando duplicados
    this.sedes = Array.from(new Set(this.universidades.map(universidad => universidad.sede_Universidad.toString())));
  }

  filtrarInmueblesPorUniversidad(nombreUniversidad: string): void {
    this.router.navigate(['universitario/inmueblesU/inmuebleUniversidadU', nombreUniversidad]);
  }

  filtrarInmueblesPorTipo(tipo: string): void {
    this.router.navigate(['/universitario/inmueblesU/tipoInmuebleU', tipo]);
  }

  filtrarInmueblesPorRango(): void {
    if (this.precioMin >= 0 && this.precioMax > 0 && this.precioMax >= this.precioMin) {
      this.router.navigate(['/universitario/inmueblesU/rangoPreciosU', this.precioMin, this.precioMax]);
    } else {
      alert('Por favor, ingrese un rango de precios válido.');
    }
  }


  ordenarInmueblesPorPrecio(orden: string): void {
    this.router.navigate([`/universitario/inmueblesU/ordenadosPorPrecioU`, orden]);
  }
}
