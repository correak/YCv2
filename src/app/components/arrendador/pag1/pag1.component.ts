import { Component } from '@angular/core';
import {MatCardActions, MatCardContent, MatCardModule} from '@angular/material/card';
import {CommonModule, NgClass} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [
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
  templateUrl: './pag1.component.html',
  styleUrl: './pag1.component.css'
})
export class Pag1Component {
  universidades = [
    { nombre: 'Universidad de Lima' },
    { nombre: 'Pontificia Universidad Católica del Perú' },
    { nombre: 'Universidad del Pacífico' },
    { nombre: 'UPC' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
