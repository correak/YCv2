import { Component } from '@angular/core';
import {HU13Dto} from '../../../../model/hu13-dto';
import {ActivatedRoute, Router} from '@angular/router';
import {InmuebleService} from '../../../../services/inmueble.service';
import {NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-inmueble-rango-u',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MatIcon
  ],
  templateUrl: './inmueble-rango-u.component.html',
  styleUrl: './inmueble-rango-u.component.css'
})
export class InmuebleRangoUComponent {
  inmuebles: HU13Dto[] = [];
  precioMin: number = 0;
  precioMax: number = 0;

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios en los parámetros de la ruta
    this.route.paramMap.subscribe(params => {
      this.precioMin = +params.get('precioMin')!;
      this.precioMax = +params.get('precioMax')!;
      this.obtenerInmueblesPorRango();
    });
  }

  obtenerInmueblesPorRango(): void {
    this.inmuebleService.getInmueblesPorRangoDePrecios(this.precioMin, this.precioMax)
      .subscribe((data: HU13Dto[]) => {
        this.inmuebles = data;
      });
  }

  verDetalles(id: number) {
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
