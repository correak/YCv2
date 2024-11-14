import { Component } from '@angular/core';
import {CommonModule, DatePipe, NgForOf} from '@angular/common';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
  MatCardTitle
} from '@angular/material/card';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {Inmueble} from '../../../model/inmueble';
import {HU8Dto} from '../../../model/hu8-dto';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {InmuebleService} from '../../../services/inmueble.service';
import {ComentarioService} from '../../../services/comentario.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ReservarDialogUComponent} from './reservar-dialog-u/reservar-dialog-u.component';
import {ComentarDialogUComponent} from './comentar-dialog-u/comentar-dialog-u.component';
import {Comentario} from '../../../model/comentario';
import {ContactoDialogUComponent} from './contacto-dialog-u/contacto-dialog-u.component';
import {HU10Dto} from '../../../model/hu10-dto';
import {CarruselDestacadosComponent} from '../../arrendador/carrusel-destacados/carrusel-destacados.component';
import {CarruselDestacadosUComponent} from '../carrusel-destacados-u/carrusel-destacados-u.component';
import {Reserva} from '../../../model/reserva';

@Component({
  selector: 'app-detalle-inmueble-u',
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
    MatIconModule,
    RouterLink,
    CarruselDestacadosComponent,
    CarruselDestacadosUComponent
  ],
  templateUrl: './detalle-inmueble-u.component.html',
  styleUrl: './detalle-inmueble-u.component.css'
})
export class DetalleInmuebleUComponent {
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
  // detalle-inmueble-u.component.ts
  // detalle-inmueble-u.component.ts
  // detalle-inmueble-u.component.ts

  openComentarDialog(): void {
    const dialogRef = this.dialog.open(ComentarDialogUComponent, {
      width: '400px',
      data: {
        inmuebleDireccion: this.inmueble?.direccion_Inmueble,
        inmuebleId: this.inmueble?.id_Inmueble
      }
    });

    dialogRef.afterClosed().subscribe((nuevoComentario: Comentario) => {
      if (nuevoComentario) {
        // Crear un nuevo objeto HU8Dto con los datos de Comentario
        const comentario: HU8Dto = {
          id_Comentario: nuevoComentario.id_Comentario,
          contenido: nuevoComentario.contenido,
          calificacion: nuevoComentario.calificacion.toString(), // Convertir calificación a string si es necesario
          fecha: nuevoComentario.fecha,
          nombreUniversitario: nuevoComentario.universitario.nombre_Universitario
        };
        this.comentarios.push(comentario); // Agregar el nuevo comentario a la lista
      }
    });
  }


  openReservaDialog(): void {
    if (this.inmueble) {
      const dialogRef = this.dialog.open(ReservarDialogUComponent, {
        width: '400px',
        data: { inmueble: this.inmueble }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Reserva realizada con éxito');
          // Lógica adicional si es necesario, por ejemplo, recargar reservas
        }
      });
    }
  }

  openContactoDialog(): void {
    if (this.inmueble?.id_Inmueble) {
      this.inmuebleService.getContactoArrendador(this.inmueble.id_Inmueble).subscribe((arrendador: HU10Dto) => {
        this.dialog.open(ContactoDialogUComponent, {
          width: '400px',
          data: {
            nombre: arrendador.nombreArrendador,
            telefono: arrendador.telefonoArrendador,
            correo: arrendador.emailArrendador
          }
        });
      });
    }
  }



}
