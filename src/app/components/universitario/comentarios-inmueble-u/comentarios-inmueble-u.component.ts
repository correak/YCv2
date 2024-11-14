import { Component } from '@angular/core';
import {HU8Dto} from '../../../model/hu8-dto';
import {ActivatedRoute} from '@angular/router';
import {ComentarioService} from '../../../services/comentario.service';
import {MatCard, MatCardActions, MatCardContent, MatCardModule} from '@angular/material/card';
import {CommonModule, NgClass} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {InmuebleService} from '../../../services/inmueble.service';
import {Inmueble} from '../../../model/inmueble';

@Component({
  selector: 'app-comentarios-inmueble-u',
  standalone: true,
  imports: [MatCard,
    MatCardContent,
    NgClass,
    MatCardActions,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule],
  templateUrl: './comentarios-inmueble-u.component.html',
  styleUrl: './comentarios-inmueble-u.component.css'
})
export class ComentariosInmuebleUComponent {
  comentarios: HU8Dto[] = [];
  direccionInmueble: string = '';

  constructor(
    private route: ActivatedRoute,
    private comentarioService: ComentarioService,
  private inmuebleService: InmuebleService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cargarComentarios(id);
    this.cargarInmueble(id);
  }

  cargarComentarios(inmuebleId: number): void {
    this.comentarioService.getComentariosPorInmueble(inmuebleId).subscribe((data) => {
      this.comentarios = data;
    });
  }

  private cargarInmueble(inmuebleId: number) {
    this.inmuebleService.getInmuebleById(inmuebleId).subscribe((data: Inmueble) => {
      this.direccionInmueble = data.direccion_Inmueble;
    });
  }
}
