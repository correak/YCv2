import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardActions} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {NgForOf} from '@angular/common';
import {Arrendador} from '../../../../model/arrendador';
import {Universidad} from '../../../../model/universidad';
import {ArrendadorService} from '../../../../services/arrendador.service';
import {UniversidadService} from '../../../../services/universidad.service';
import {InmuebleService} from '../../../../services/inmueble.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registra-inmueble',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatCard,
    MatCardActions,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './registra-inmueble.component.html',
  styleUrl: './registra-inmueble.component.css'
})
export class RegistraInmuebleComponent {

  inmuebleForm: FormGroup;
  arrendadores: Arrendador[] = [];
  universidades: Universidad[] = [];
  fechaActual: string = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD

  private fb = inject(FormBuilder);
  private arrendadorService = inject(ArrendadorService);
  private universidadService = inject(UniversidadService);
  private inmuebleService = inject(InmuebleService);
  private snackBar = inject(MatSnackBar); // Inyectar MatSnackBar
  constructor() {
    this.inmuebleForm = this.fb.group({
      direccion_Inmueble: ['', Validators.required],
      tipo_Inmueble: ['', Validators.required],
      precio_Inmueble: ['', Validators.required],
      descripcion_Propiedad: [''],
      estado_Propiedad: ['', Validators.required],
      arrendador: ['', Validators.required],
      universidad: ['', Validators.required],
      fechaPublicacion: [this.fechaActual, Validators.required]
    });
  }
  ngOnInit(): void {
    this.cargarArrendadores();
    this.cargarUniversidades();
  }
  cargarArrendadores() {
    this.arrendadorService.getArrendadores().subscribe(arrendadores => {
      this.arrendadores = arrendadores;
    });
  }
  cargarUniversidades() {
    this.universidadService.getUniversidades().subscribe(universidades => {
      this.universidades = universidades;
    });
  }


  onSubmit() {
    if (this.inmuebleForm.valid) {
      this.inmuebleService.postInmueble(this.inmuebleForm.value).subscribe({
        next: (response) => {
          console.log('Inmueble registrado:', response);
          this.inmuebleForm.reset(); // Reiniciar el formulario
          this.inmuebleForm.patchValue({ fechaPublicacion: this.fechaActual }); // Restaurar la fecha actual
          this.snackBar.open('Inmueble registrado exitosamente', 'Cerrar', {
            duration: 3000, // Duración del mensaje
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        error: (error) => {
          console.error('Error al registrar el inmueble:', error);
          this.snackBar.open('Error al registrar el inmueble', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
      });
    } else {
      this.snackBar.open('Formulario inválido. Complete todos los campos.', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }



}
