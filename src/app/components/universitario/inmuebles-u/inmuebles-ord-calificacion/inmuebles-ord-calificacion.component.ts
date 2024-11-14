import { Component } from '@angular/core';
import {HU15Dto} from '../../../../model/hu15-dto';
import {InmuebleService} from '../../../../services/inmueble.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inmuebles-ord-calificacion',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatIcon
  ],
  templateUrl: './inmuebles-ord-calificacion.component.html',
  styleUrl: './inmuebles-ord-calificacion.component.css'
})
export class InmueblesOrdCalificacionComponent {
  inmuebles: HU15Dto[] = [];

  constructor(private inmuebleService: InmuebleService,
              private router: Router) {}

  ngOnInit(): void {
    this.obtenerInmueblesOrdenadosPorCalificacion();
  }

  obtenerInmueblesOrdenadosPorCalificacion(): void {
    this.inmuebleService.getInmueblesOrdenadosPorCalificacion().subscribe((data: HU15Dto[]) => {
      this.inmuebles = data;
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
