import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {Universitario} from '../../../../model/universitario';
import {HU4Dto} from '../../../../model/hu4-dto';
import {UniversitarioService} from '../../../../services/universitario.service';
import {ReservaService} from '../../../../services/reserva.service';
import {Reserva} from '../../../../model/reserva';
import {MatCard} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatList, MatListItem} from '@angular/material/list';

@Component({
  selector: 'app-mis-reservas-u',
  standalone: true,
  imports: [
    FormsModule,
    DatePipe,
    NgForOf,
    NgIf,
    MatIcon,
    MatIconButton,
    MatCard,
    MatFormField,
    MatSelect,
    MatOption,
    MatList,
    MatListItem,
    MatLabel,
  ],
  templateUrl: './mis-reservas-u.component.html',
  styleUrl: './mis-reservas-u.component.css'
})
export class MisReservasUComponent {
  universitarios: Universitario[] = [];
  reservas: HU4Dto[] = [];

  constructor(
    private universitarioService: UniversitarioService,
    private reservaService: ReservaService
  ) {}

  ngOnInit(): void {
    this.getUniversitarios();
  }

  getUniversitarios(): void {
    this.universitarioService.getUniversitarios().subscribe(
      (data) => {
        this.universitarios = data;
      },
      (error) => {
        console.error('Error al obtener los universitarios:', error);
      }
    );
  }

  onUniversitarioChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedIndex = selectElement.selectedIndex;
    const selectedUniversitario = this.universitarios[selectedIndex];

    if (selectedUniversitario) {
      this.reservaService.getReservasPorUniversitario(selectedUniversitario.id_Universitario).subscribe(
        (data) => {
          this.reservas = data;
        },
        (error) => {
          console.error('Error al obtener reservas:', error);
        }
      );
    }
  }
}
