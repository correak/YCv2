import {Component, inject, Inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Universitario} from '../../../../model/universitario';
import {
  MAT_DIALOG_DATA, MatDialogModule,
  MatDialogRef, MatDialogTitle,
} from '@angular/material/dialog';
import {ReservaService} from '../../../../services/reserva.service';
import {UniversitarioService} from '../../../../services/universitario.service';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';
import {Reserva} from '../../../../model/reserva';
import {Inmueble} from '../../../../model/inmueble';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-reservar-dialog',
  standalone: true,
  imports: [
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
    MatCheckbox,
    MatInput,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './reservar-dialog.component.html',
  styleUrl: './reservar-dialog.component.css'
})
export class ReservarDialogComponent {
  reservaForm: FormGroup;
  universitarios: Universitario[] = [];
  fechaActual = new Date();

  constructor(
    private dialogRef: MatDialogRef<ReservarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { inmueble: Inmueble },
    private fb: FormBuilder,
    private universitarioService: UniversitarioService,
    private reservaService: ReservaService,
    private snackBar: MatSnackBar
  ) {
    this.reservaForm = this.fb.group({
      fecha: [this.fechaActual, Validators.required],
      descripcion: ['', Validators.required],
      universitario: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.universitarioService.getUniversitarios().subscribe((data) => {
      this.universitarios = data;
    });
  }

  onSubmit(): void {
    if (this.reservaForm.valid) {
      const reserva: Reserva = {
        id_Reserva: 0, // Esto se asigna en el backend al crearse
        fecha_Reserva: this.reservaForm.value.fecha,
        comentario: this.reservaForm.value.descripcion,
        universitario: this.reservaForm.value.universitario,
        inmueble: this.data.inmueble,
      };

      this.reservaService.postReserva(reserva).subscribe(() => {
        this.snackBar.open('Reserva enviada correctamente', 'Cerrar', {
          duration: 3000, // Duración en milisegundos (3 segundos)
          verticalPosition: 'bottom', // Posición vertical
          horizontalPosition: 'center' // Posición horizontal
        });
        this.dialogRef.close(true); // Cierra el diálogo y pasa el resultado
      });
    }

  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
