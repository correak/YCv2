import { Component } from '@angular/core';
import {InmuebleService} from '../../../../services/inmueble.service';
import {HU15Dto} from '../../../../model/hu15-dto';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
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
import {Router, RouterLink} from '@angular/router';
import {Inmueble} from '../../../../model/inmueble';

@Component({
  selector: 'app-todosinmuebles-u',
  standalone: true,
  imports: [
    MatIcon,
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
    RouterLink
  ],
  templateUrl: './todosinmuebles-u.component.html',
  styleUrl: './todosinmuebles-u.component.css'
})
export class TodosinmueblesUComponent {
  inmuebles: Inmueble[] = [];

  constructor(private inmuebleService: InmuebleService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerInmuebles();
  }

  obtenerInmuebles(): void {
    this.inmuebleService.getInmueble().subscribe((data: Inmueble[]) => {
      this.inmuebles = data;
    });
  }



  verDetalles(id: number) {
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
