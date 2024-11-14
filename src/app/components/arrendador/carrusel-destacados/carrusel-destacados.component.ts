import {Component, ElementRef, ViewChild} from '@angular/core';
import {HU15Dto} from '../../../model/hu15-dto';
import {InmuebleService} from '../../../services/inmueble.service';
import {MatCard, MatCardActions, MatCardContent, MatCardModule} from '@angular/material/card';
import {CommonModule, NgClass} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carrusel-destacados',
  standalone: true,
  imports: [MatCard,
    MatCardContent,
    NgClass,
    MatCardActions,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Angular Material
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule],
  templateUrl: './carrusel-destacados.component.html',
  styleUrl: './carrusel-destacados.component.css'
})
export class CarruselDestacadosComponent {
  inmuebles: HU15Dto[] = [];
  displayedInmuebles: HU15Dto[] = [];
  currentIndex: number = 0;
  chunkSize: number = 4;

  constructor(private inmuebleService: InmuebleService, private router: Router) {}

  ngOnInit(): void {
    this.inmuebleService.getInmueblesOrdenadosPorCalificacion().subscribe((data: HU15Dto[]) => {
      this.inmuebles = data;
      this.updateDisplayedInmuebles();
    });
  }

  updateDisplayedInmuebles() {
    this.displayedInmuebles = this.inmuebles.slice(this.currentIndex, this.currentIndex + this.chunkSize);
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.chunkSize;
      this.updateDisplayedInmuebles();
    }
  }

  next() {
    if (this.currentIndex + this.chunkSize < this.inmuebles.length) {
      this.currentIndex += this.chunkSize;
      this.updateDisplayedInmuebles();
    }
  }

  // Método para redirigir al detalle del inmueble
  verDetalles(id: number) {
    this.router.navigate(['arrendador/inmueble', id]);
  }
}
