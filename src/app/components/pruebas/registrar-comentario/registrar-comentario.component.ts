import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Inmueble} from '../../../model/inmueble';
import {Universitario} from '../../../model/universitario';
import {ComentarioService} from '../../../services/comentario.service';
import {InmuebleService} from '../../../services/inmueble.service';
import {UniversitarioService} from '../../../services/universitario.service';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {MatInput, MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-registrar-comentario',
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
    MatCardContent,
    MatCardTitle,
    RouterLink,
    MatCardActions,
    MatCardTitle,
    MatCardContent,
    MatOption,
    CommonModule,
  ],
  templateUrl: './registrar-comentario.component.html',
  styleUrl: './registrar-comentario.component.css'
})
export class RegistrarComentarioComponent {
  comentarioForm: FormGroup;
  inmuebles: Inmueble[] = [];
  universitarios: Universitario[] = [];
  calificaciones = [1, 2, 3, 4, 5];
  fechaActual: string = new Date().toISOString().split('T')[0];
  private fb = inject(FormBuilder);
  private comentarioService = inject(ComentarioService);
  private inmuebleService = inject(InmuebleService);
  private universitarioService = inject(UniversitarioService);
  constructor() {
    this.comentarioForm = this.fb.group({
      contenido: ['', Validators.required],
      calificacion: ['', Validators.required],
      fecha: [this.fechaActual, Validators.required],
      universitario: ['', Validators.required],
      inmueble: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.cargarInmuebles();
    this.cargarUniversitarios();
  }

  cargarInmuebles() {
    this.inmuebleService.getInmueble().subscribe(inmuebles => {
      this.inmuebles = inmuebles;
    });
  }

  cargarUniversitarios() {
    this.universitarioService.getUniversitarios().subscribe(universitarios => {
      this.universitarios = universitarios;
    });
  }

  onSubmit() {
    if (this.comentarioForm.valid) {
      const comentario = this.comentarioForm.value;
      this.comentarioService.postComentario(comentario).subscribe(response => {
        console.log("Comentario registrado:", response);
      });
    } else {
      console.log("Formulario no válido");
    }
  }

}
