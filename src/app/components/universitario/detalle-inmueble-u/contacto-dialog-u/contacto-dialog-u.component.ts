import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-contacto-dialog-u',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatButton,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './contacto-dialog-u.component.html',
  styleUrl: './contacto-dialog-u.component.css'
})
export class ContactoDialogUComponent {
  constructor(
    public dialogRef: MatDialogRef<ContactoDialogUComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nombre: string, telefono: string, correo: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
