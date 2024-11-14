import { Component } from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/core";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {CommonModule, NgClass, NgForOf} from "@angular/common";
import {MatCardActions, MatCardContent, MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-pag2',
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
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './pag2.component.html',
  styleUrl: './pag2.component.css'
})
export class Pag2Component {
  universidades = [
    { nombre: 'Universidad de Lima' },
    { nombre: 'Pontificia Universidad Católica del Perú' },
    { nombre: 'Universidad del Pacífico' },
    { nombre: 'UPC' }
  ];

  constructor() {}

  ngOnInit(): void {}

}
