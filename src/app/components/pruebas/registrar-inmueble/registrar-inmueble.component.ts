import { Component, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'; // Importación de MatSnackBar
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { Arrendador } from '../../../model/arrendador';
import { Universidad } from '../../../model/universidad';
import { ArrendadorService } from '../../../services/arrendador.service';
import { UniversidadService } from '../../../services/universidad.service';
import { InmuebleService } from '../../../services/inmueble.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-inmueble',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatCard,
    ReactiveFormsModule,
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterLink,
    MatCardActions,
    MatCardTitle,
    MatCardContent,
    MatOption,
    CommonModule,
    MatSnackBarModule,
  ],
  templateUrl: './registrar-inmueble.component.html',
  styleUrls: ['./registrar-inmueble.component.css'], // Cambiar styleUrl a styleUrls
})
export class RegistrarInmuebleComponent {
  inmuebleForm: FormGroup;
  arrendadores: Arrendador[] = [];
  universidades: Universidad[] = [];
  fechaActual: string = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD

  constructor(
    private fb: FormBuilder,
    private arrendadorService: ArrendadorService,
    private universidadService: UniversidadService,
    private inmuebleService: InmuebleService,
    private snackBar: MatSnackBar // Inyección del MatSnackBar
  ) {
    this.inmuebleForm = this.fb.group({
      direccion_Inmueble: ['', Validators.required],
      tipo_Inmueble: ['', Validators.required],
      precio_Inmueble: ['', Validators.required],
      descripcion_Propiedad: [''],
      estado_Propiedad: ['', Validators.required],
      arrendador: ['', Validators.required],
      universidad: ['', Validators.required],
      fechaPublicacion: [this.fechaActual, Validators.required],
    });
  }

  ngOnInit(): void {
    this.cargarArrendadores();
    this.cargarUniversidades();
  }

  cargarArrendadores() {
    this.arrendadorService.getArrendadores().subscribe((arrendadores) => {
      this.arrendadores = arrendadores;
    });
  }

  cargarUniversidades() {
    this.universidadService.getUniversidades().subscribe((universidades) => {
      this.universidades = universidades;
    });
  }

  onSubmit() {
    if (this.inmuebleForm.valid) {
      this.inmuebleService.postInmueble(this.inmuebleForm.value).subscribe(response => {
        console.log("Inmueble registrado:", response);
      });
    }
  }


}
