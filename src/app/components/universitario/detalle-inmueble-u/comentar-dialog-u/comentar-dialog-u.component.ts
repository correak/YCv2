import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {Universitario} from '../../../../model/universitario';
import {UniversitarioService} from '../../../../services/universitario.service';
import {ComentarioService} from '../../../../services/comentario.service';
import {HU8Dto} from '../../../../model/hu8-dto';
import {Inmueble} from '../../../../model/inmueble';
import {Comentario} from '../../../../model/comentario';

@Component({
  selector: 'app-comentar-dialog-u',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatLabel,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
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
  templateUrl: './comentar-dialog-u.component.html',
  styleUrl: './comentar-dialog-u.component.css'
})
export class ComentarDialogUComponent {
  comentarioForm: FormGroup;
  universitarios: Universitario[] = [];
  fechaActual = new Date();

  constructor(
    private dialogRef: MatDialogRef<ComentarDialogUComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { inmuebleDireccion: string, inmuebleId: number },
    private fb: FormBuilder,
    private universitarioService: UniversitarioService,
    private comentarioService: ComentarioService,
    private snackBar: MatSnackBar
  ) {
    this.comentarioForm = this.fb.group({
      fecha: [this.fechaActual, Validators.required],
      contenido: ['', Validators.required],
      calificacion: [null, Validators.required],
      universitario: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.universitarioService.getUniversitarios().subscribe((data) => {
      this.universitarios = data;
    });
  }

  onSubmit(): void {
    if (this.comentarioForm.valid) {
      const nuevoComentario: Comentario = {
        id_Comentario: 0, // Esto será asignado por el backend
        contenido: this.comentarioForm.value.contenido,
        calificacion: this.comentarioForm.value.calificacion,
        fecha: this.fechaActual,
        universitario: this.comentarioForm.value.universitario,
        inmueble: { id_Inmueble: this.data.inmuebleId } as any // Solo necesita el id del inmueble
      };

      this.comentarioService.postComentario(nuevoComentario).subscribe(() => {
        this.snackBar.open('Comentario enviado correctamente', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center'
        });
        this.dialogRef.close(nuevoComentario); // Cierra el diálogo y devuelve el comentario creado
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
