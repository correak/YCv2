import { Component } from '@angular/core';
import {HU29Dto} from '../../../../model/hu29-dto';
import {InmuebleService} from '../../../../services/inmueble.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForOf, NgIf, TitleCasePipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-inmueble-ord-precio-u',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    TitleCasePipe,
    MatIcon
  ],
  templateUrl: './inmueble-ord-precio-u.component.html',
  styleUrl: './inmueble-ord-precio-u.component.css'
})
export class InmuebleOrdPrecioUComponent {
  inmuebles: HU29Dto[] = [];
  orden: string = 'ascendente';

  constructor(
    private inmuebleService: InmuebleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.orden = params.get('orden') || 'ascendente';
      this.obtenerInmueblesOrdenados();
    });
  }

  obtenerInmueblesOrdenados(): void {
    if (this.orden === 'ascendente') {
      this.inmuebleService.getInmueblesOrdenadosPorPrecioAscendente().subscribe(
        (data) => this.inmuebles = data,
        (error) => console.error(error)
      );
    } else {
      this.inmuebleService.getInmueblesOrdenadosPorPrecioDescendente().subscribe(
        (data) => this.inmuebles = data,
        (error) => console.error(error)
      );
    }
  }
  verDetalles(id: number) {
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
