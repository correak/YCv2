import { Component } from '@angular/core';
import {HU12Dto} from '../../../../model/hu12-dto';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {InmuebleService} from '../../../../services/inmueble.service';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-inmueble-universidad-u',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatIcon,
    MatButton,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatLabel,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    RouterLink
  ],
  templateUrl: './inmueble-universidad-u.component.html',
  styleUrl: './inmueble-universidad-u.component.css'
})
export class InmuebleUniversidadUComponent {
  inmuebles: HU12Dto[] = [];
  nombreUniversidad: string;

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Suscribirse a los cambios de parámetros para actualizar la lista de inmuebles
    this.route.params.subscribe(params => {
      this.nombreUniversidad = params['nombreUniversidad'];
      this.cargarInmuebles();
    });
  }

  cargarInmuebles(): void {
    this.inmuebleService.getInmueblesPorUniversidad(this.nombreUniversidad).subscribe(data => {
      this.inmuebles = data;
    });
  }

  verDetalles(id: number) {
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
