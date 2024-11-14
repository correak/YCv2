import { Component } from '@angular/core';
import {InmuebleService} from '../../../../services/inmueble.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HU14Dto} from '../../../../model/hu14-dto';
import {NgForOf, NgIf} from '@angular/common';
import {switchMap} from 'rxjs';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-inmueble-tipo-u',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    MatIcon
  ],
  templateUrl: './inmueble-tipo-u.component.html',
  styleUrl: './inmueble-tipo-u.component.css'
})
export class InmuebleTipoUComponent {
  inmuebles: HU14Dto[] = [];
  tipoInmueble: string = '';

  constructor(
    private inmuebleService: InmuebleService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.tipoInmueble = params.get('tipo')!;
          return this.inmuebleService.getInmueblesPorTipo(this.tipoInmueble);
        })
      )
      .subscribe((data: HU14Dto[]) => {
        this.inmuebles = data;
      });
  }

  verDetalles(id: number) {
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
