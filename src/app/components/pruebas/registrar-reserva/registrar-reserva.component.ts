import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from '@angular/material/card';
import {RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {MatButton} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {Inmueble} from '../../../model/inmueble';
import {Universitario} from '../../../model/universitario';
import {ReservaService} from '../../../services/reserva.service';
import {InmuebleService} from '../../../services/inmueble.service';
import {UniversitarioService} from '../../../services/universitario.service';

@Component({
  selector: 'app-registrar-reserva',
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
  templateUrl: './registrar-reserva.component.html',
  styleUrl: './registrar-reserva.component.css'
})
export class RegistrarReservaComponent {

  reservaForm: FormGroup;
  inmuebles: Inmueble[] = [];
  universitarios: Universitario[] = [];
  fechaActual: string = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
  inmuebleSeleccionado?: Inmueble;
  universitarioSeleccionado?: Universitario;

  private fb = inject(FormBuilder);
  private reservaService = inject(ReservaService);
  private inmuebleService = inject(InmuebleService);
  private universitarioService = inject(UniversitarioService);
  constructor() {
    this.reservaForm = this.fb.group({
      comentario: [''],
      fecha_Reserva: [this.fechaActual, Validators.required],
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

  mostrarInmueble(inmueble: Inmueble) {
    this.inmuebleSeleccionado = inmueble;
  }

  mostrarUniversitario(universitario: Universitario) {
    this.universitarioSeleccionado = universitario;
  }

  onSubmit() {
    if (this.reservaForm.valid) {
      const reserva = this.reservaForm.value;
      this.reservaService.postReserva(reserva).subscribe(response => {
        console.log("Reserva registrada:", response);
      });
    } else {
      console.log("Formulario no válido");
    }
  }

}
