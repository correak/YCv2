import { Component } from '@angular/core';
import {MatExpansionPanel, MatExpansionPanelHeader} from '@angular/material/expansion';
import {MatFormField} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatOption, MatSelect} from '@angular/material/select';
import {NgForOf, NgIf} from '@angular/common';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {Universitario} from '../../../../model/universitario';
import {UniversitarioService} from '../../../../services/universitario.service';
import {MatIcon} from '@angular/material/icon';
import {MatButton} from '@angular/material/button';
import {ModificarUComponent} from './modificar-u/modificar-u.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-datos-u',
  standalone: true,
  imports: [
    MatExpansionPanelHeader,
    MatExpansionPanel,
    MatFormField,
    FormsModule,
    MatSelect,
    MatOption,
    NgForOf,
    MatCard,
    NgIf,
    MatCardHeader,
    MatCardContent,
    MatIcon,
    MatButton
  ],
  templateUrl: './datos-u.component.html',
  styleUrl: './datos-u.component.css'
})
export class DatosUComponent {
  universitarios: Universitario[] = [];
  selectedUniversitarioId: number | null = null;
  universitario: Universitario | null = null;

  constructor(private universitarioService: UniversitarioService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUniversitarios();
  }

  loadUniversitarios(): void {
    this.universitarioService.getUniversitarios().subscribe((data: Universitario[]) => {
      this.universitarios = data;
    });
  }

  fetchUniversitarioDetails(): void {
    if (this.selectedUniversitarioId) {
      this.universitarioService.getUniversitarioById(this.selectedUniversitarioId)
        .subscribe((data: Universitario) => {
          this.universitario = data;
        });
    } else {
      this.universitario = null;
    }
  }

  onUpdateClick(): void {
    if (this.universitario) {
      const dialogRef = this.dialog.open(ModificarUComponent, {
        width: '400px',
        data: { ...this.universitario }
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          this.universitarioService.updateUniversitario(result).subscribe(() => {
            this.fetchUniversitarioDetails();
          });
        }
      });
    }
  }
}
