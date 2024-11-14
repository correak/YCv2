import { Component } from '@angular/core';
import {Universidad} from '../../../model/universidad';
import {UniversidadService} from '../../../services/universidad.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule, NgClass} from '@angular/common';
import {MatCard, MatCardActions, MatCardContent, MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-carrusel-universidades',
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
  templateUrl: './carrusel-universidades.component.html',
  styleUrl: './carrusel-universidades.component.css'
})
export class CarruselUniversidadesComponent {
  universidades: Universidad[] = [];
  displayedUniversidades: Universidad[] = [];
  currentIndex: number = 0;
  chunkSize: number = 4; // Número de universidades visibles

  constructor(private universidadService: UniversidadService) {}

  ngOnInit(): void {
    this.obtenerUniversidades();
  }

  obtenerUniversidades(): void {
    this.universidadService.getUniversidades().subscribe((data: Universidad[]) => {
      this.universidades = data;
      this.updateDisplayedUniversidades();
    });
  }

  updateDisplayedUniversidades(): void {
    this.displayedUniversidades = this.universidades.slice(this.currentIndex, this.currentIndex + this.chunkSize);
  }

  next(): void {
    if (this.currentIndex + this.chunkSize < this.universidades.length) {
      this.currentIndex += this.chunkSize;
      this.updateDisplayedUniversidades();
    }
  }

  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex -= this.chunkSize;
      this.updateDisplayedUniversidades();
    }
  }

}
