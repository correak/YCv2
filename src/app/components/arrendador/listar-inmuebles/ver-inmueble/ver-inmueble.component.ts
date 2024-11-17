import {Component, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatOption, MatSelect, MatSelectModule} from '@angular/material/select';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {Arrendador} from '../../../../model/arrendador';
import {HU18Dto} from '../../../../model/hu18-dto';
import {ArrendadorService} from '../../../../services/arrendador.service';
import {InmuebleService} from '../../../../services/inmueble.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-ver-inmueble',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatFormField,
    MatSelect,
    MatOption,
    NgForOf,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatRow,
    MatHeaderRow,
    CurrencyPipe,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    MatFormFieldModule, // Asegúrate de incluirlo
    MatSelectModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './ver-inmueble.component.html',
  styleUrl: './ver-inmueble.component.css'
})
export class VerInmuebleComponent implements OnInit{
  arrendadores: Arrendador[] = []; // Lista de arrendadores
  inmuebles: HU18Dto[] = []; // Lista de inmuebles
  displayedColumns: string[] = ['direccionInmueble', 'tipoInmueble', 'precioInmueble', 'estadoPropiedad', 'acciones'];

  constructor(
    private arrendadorService: ArrendadorService,
    private inmuebleService: InmuebleService
  ) {}

  ngOnInit(): void {
    this.cargarArrendadores();
  }

  cargarArrendadores(): void {
    this.arrendadorService.getArrendadores().subscribe((data) => {
      this.arrendadores = data; // Cargar la lista de arrendadores
    });
  }

  onArrendadorChange(arrendadorId: number): void {
    this.inmuebleService.getInmueblesPorArrendador(arrendadorId).subscribe((data) => {
      this.inmuebles = data; // Actualizar la lista de inmuebles
    });
  }

  onEditar(inmueble: HU18Dto): void {
    console.log('Editar inmueble:', inmueble);
    // Implementa la lógica para abrir un formulario de edición o redirigir a una página de edición
  }

  onBorrar(idInmueble: number): void {
    if (confirm('¿Estás seguro de que deseas borrar este inmueble?')) {
      this.inmuebleService.deleteInmueble(idInmueble).subscribe({
        next: () => {
          // Filtra el arreglo para eliminar el inmueble borrado
          this.inmuebles = this.inmuebles.filter((i) => i.idInmueble !== idInmueble);
          console.log('Inmueble borrado:', idInmueble);
        },
        error: (err) => {
          console.error('Error al borrar el inmueble:', err);
          alert('Ocurrió un error al intentar borrar el inmueble.');
        },
      });
    }
  }

}
