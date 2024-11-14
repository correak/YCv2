import {Component, inject, ViewChild} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {DatePipe} from '@angular/common';
import {MatSort, MatSortHeader} from '@angular/material/sort';
import {MatButton} from '@angular/material/button';
import {Router, RouterLink} from '@angular/router';
import {Arrendador} from '../../../../model/arrendador';
import {ArrendadorService} from '../../../../services/arrendador.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-lista-inmuebles',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatPaginator,
    DatePipe,
    MatSort,
    MatSortHeader,
    MatButton,
    RouterLink,
  ],
  templateUrl: './lista-inmuebles.component.html',
  styleUrl: './lista-inmuebles.component.css'
})
export class ListaInmueblesComponent {

  arrendadores: Arrendador[];
  displayedColumns: string[] = ['id_Arrendador','dni_Arrendador', 'nombre_Arrendador','telefono_Arrendador' ,'email_Arrendador', 'editar', 'eliminar'];
  dataSource: MatTableDataSource<Arrendador[]>=new MatTableDataSource<Arrendador[]>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.getArrendadores()
  }

  arredadorService: ArrendadorService = inject(ArrendadorService);
  route: Router=inject(Router)
  dialog = inject(MatDialog);

  getArrendadores(){
    this.arredadorService.getArrendadores().subscribe(data=>{
      this.arrendadores=data;
    })
  }


}
