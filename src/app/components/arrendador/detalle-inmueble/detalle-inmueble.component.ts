import { Component } from '@angular/core';
import {Inmueble} from '../../../model/inmueble';
import {ActivatedRoute} from '@angular/router';
import {InmuebleService} from '../../../services/inmueble.service';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {HU8Dto} from '../../../model/hu8-dto';
import {ComentarioService} from '../../../services/comentario.service';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {ReservarDialogComponent} from './reservar-dialog/reservar-dialog.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
@Component({
  selector: 'app-detalle-inmueble',
  standalone: true,
  imports: [
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
    MatIconModule
  ],
  templateUrl: './detalle-inmueble.component.html',
  styleUrl: './detalle-inmueble.component.css'
})
export class DetalleInmuebleComponent {
  inmueble: Inmueble | null = null;
  comentarios: HU8Dto[] = [];

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService,
    private comentarioService: ComentarioService,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.inmuebleService.getInmuebleById(id).subscribe((data) => {
      this.inmueble = data;
    });
    this.cargarComentarios(id);
  }

  cargarComentarios(inmuebleId: number): void {
    this.comentarioService.getComentariosPorInmueble(inmuebleId).subscribe((data) => {
      this.comentarios = data;
    });
  }
  openReservarDialog(): void {
    const dialogRef = this.dialog.open(ReservarDialogComponent, {
      width: '400px',
      data: { inmueble: this.inmueble }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Lógica adicional si es necesario después de guardar la reserva
      }
    });
  }
}
