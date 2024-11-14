import { Component } from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardContent, MatCardModule} from "@angular/material/card";
import {CommonModule, NgClass, NgForOf, NgIf} from "@angular/common";
import {HU15Dto} from '../../../model/hu15-dto';
import {InmuebleService} from '../../../services/inmueble.service';
import {Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-carrusel-destacados-u',
  standalone: true,
    imports: [
      MatCard,
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
      MatSelectModule
    ],
  templateUrl: './carrusel-destacados-u.component.html',
  styleUrl: './carrusel-destacados-u.component.css'
})
export class CarruselDestacadosUComponent {
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
    this.router.navigate(['universitario/inmuebleU', id]);
  }
}
