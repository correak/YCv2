import { Component } from '@angular/core';
import {HU16Dto} from '../../../../model/hu16-dto';
import {InmuebleService} from '../../../../services/inmueble.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {Inmueble} from '../../../../model/inmueble';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inmueble-ord-fecha-u',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    MatIcon
  ],
  templateUrl: './inmueble-ord-fecha-u.component.html',
  styleUrl: './inmueble-ord-fecha-u.component.css'
})
export class InmuebleOrdFechaUComponent {
  inmuebles: HU16Dto[] = [];

  constructor(private inmuebleService: InmuebleService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarInmueblesRecientes();
  }

  cargarInmueblesRecientes(): void {
    this.inmuebleService.getInmueble().subscribe(
      (data: Inmueble[]) => {
        this.inmuebles = data
          .map((inmueble) => this.convertirAHU16Dto(inmueble))
          .sort((a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime());
      },
      (error) => {
        console.error('Error al cargar los inmuebles recientes:', error);
      }
    );
  }

  convertirAHU16Dto(inmueble: Inmueble): HU16Dto {
    return {
      idInmueble: inmueble.id_Inmueble,
      direccionInmueble: inmueble.direccion_Inmueble,
      precioInmueble: inmueble.precio_Inmueble,
      descripcionPropiedad: inmueble.descripcion_Propiedad,
      tipoInmueble: inmueble.tipo_Inmueble,
      fechaPublicacion: inmueble.fechaPublicacion
    };
  }

  verDetalles(id: number) {
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
