import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {Universitario} from '../../../../../model/universitario';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {UniversitarioService} from '../../../../../services/universitario.service';
import {NgIf} from '@angular/common';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-modificar-u',
  standalone: true,
  imports: [
    MatDialogContent,
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    MatDialogActions,
    MatButton,
    MatInput,
    FormsModule,
    NgIf,
    MatCard,
    MatError,
  ],
  templateUrl: './modificar-u.component.html',
  styleUrl: './modificar-u.component.css'
})
export class ModificarUComponent {
  constructor(
    public dialogRef: MatDialogRef<ModificarUComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Universitario
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
