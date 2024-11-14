import {Component, inject} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatOption} from '@angular/material/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {Reserva} from '../../../model/reserva';
import {ContratoService} from '../../../services/contrato.service';
import {ReservaService} from '../../../services/reserva.service';

@Component({
  selector: 'app-registrar-contrato',
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
  templateUrl: './registrar-contrato.component.html',
  styleUrl: './registrar-contrato.component.css'
})
export class RegistrarContratoComponent {
  contratoForm: FormGroup;
  reservas: Reserva[] = [];
  fechaActual: string = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
  reservaSeleccionada?: Reserva;

  private fb = inject(FormBuilder);
  private contratoService = inject(ContratoService);
  private reservaService = inject(ReservaService);

  constructor() {
    this.contratoForm = this.fb.group({
      fecha_Contrato: [this.fechaActual, Validators.required],
      comentario: [''],
      reserva: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas() {
    this.reservaService.getReserva().subscribe(reservas => {
      this.reservas = reservas;
    });
  }

  mostrarReserva(reserva: Reserva) {
    this.reservaSeleccionada = reserva;
  }

  onSubmit() {
    if (this.contratoForm.valid) {
      const contrato = this.contratoForm.value;
      this.contratoService.postContrato(contrato).subscribe(response => {
        console.log("Contrato registrado:", response);
      });
    } else {
      console.log("Formulario no válido");
    }
  }
}
