import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {HU18Dto} from '../../../../model/hu18-dto';
import {InmuebleService} from '../../../../services/inmueble.service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {Inmueble} from '../../../../model/inmueble';
import {ArrendadorService} from '../../../../services/arrendador.service';
import {UniversidadService} from '../../../../services/universidad.service';
import {Arrendador} from '../../../../model/arrendador';
import {Universidad} from '../../../../model/universidad';
import {MatCard, MatCardContent} from '@angular/material/card';
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
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {BrowserModule} from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-edita-inmueble',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatButton,
    ReactiveFormsModule,
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
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule, // Importa el adaptador nativo de fecha
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './edita-inmueble.component.html',
  styleUrl: './edita-inmueble.component.css'
})
export class EditaInmuebleComponent {
  inmuebleForm: FormGroup;
  inmuebleId: number;
  inmueble: Inmueble;
  arrendadores: Arrendador[] = [];
  universidades: Universidad[] = [];

  constructor(
    private route: ActivatedRoute,
    private inmuebleService: InmuebleService,
    private arrendadoresService: ArrendadorService,
    private universidadesService: UniversidadService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.inmuebleForm = this.fb.group({
      direccion_Inmueble: ['', Validators.required],
      tipo_Inmueble: ['', Validators.required],
      precio_Inmueble: ['', [Validators.required, Validators.min(0)]],
      estado_Propiedad: ['', Validators.required],
      descripcion_Propiedad: ['', Validators.required],
      arrendador: ['', Validators.required],
      universidad: ['', Validators.required],
      fechaPublicacion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.inmuebleId = +this.route.snapshot.paramMap.get('id')!;
    if (this.inmuebleId === 0) {
      console.error('ID de inmueble inválido');
      return;
    }
    this.loadInmueble();
    this.loadArrendadores();
    this.loadUniversidades();
  }

  loadInmueble(): void {
    this.inmuebleService.getInmuebleById(this.inmuebleId).subscribe((data) => {
      this.inmueble = data;
      this.inmuebleForm.patchValue({
        direccion_Inmueble: this.inmueble.direccion_Inmueble,
        tipo_Inmueble: this.inmueble.tipo_Inmueble,
        precio_Inmueble: this.inmueble.precio_Inmueble,
        estado_Propiedad: this.inmueble.estado_Propiedad,
        descripcion_Propiedad: this.inmueble.descripcion_Propiedad,
        arrendador: this.inmueble.arrendador.id_Arrendador, // Usamos solo el ID
        universidad: this.inmueble.universidad.id_Universidad, // Usamos solo el ID
        fechaPublicacion: this.inmueble.fechaPublicacion
      });
    });
  }

  loadArrendadores(): void {
    this.arrendadoresService.getArrendadores().subscribe((data) => {
      this.arrendadores = data;
    });
  }

  loadUniversidades(): void {
    this.universidadesService.getUniversidades().subscribe((data) => {
      this.universidades = data;
    });
  }

  onSubmit(): void {
    if (this.inmuebleForm.invalid) {
      return;
    }

    const updatedInmueble: Inmueble = {
      id_Inmueble: this.inmuebleId,
      direccion_Inmueble: this.inmuebleForm.get('direccion_Inmueble')?.value,
      tipo_Inmueble: this.inmuebleForm.get('tipo_Inmueble')?.value,
      precio_Inmueble: this.inmuebleForm.get('precio_Inmueble')?.value,
      descripcion_Propiedad: this.inmuebleForm.get('descripcion_Propiedad')?.value,
      estado_Propiedad: this.inmuebleForm.get('estado_Propiedad')?.value,
      arrendador: {
        id_Arrendador: this.inmuebleForm.get('arrendador')?.value,
        dni_Arrendador: this.inmuebleForm.get('dni_Arrendador')?.value,
        nombre_Arrendador: this.inmuebleForm.get('nombre_Arrendador')?.value,
        telefono_Arrendador: this.inmuebleForm.get('telefono_Arrendador')?.value,
        email_Arrendador: this.inmuebleForm.get('email_Arrendador')?.value
      },
      universidad: {
        id_Universidad: this.inmuebleForm.get('universidad')?.value,
        nombre: this.inmuebleForm.get('nombreUniversidad')?.value, // Se debe agregar campo para nombre
        sede_Universidad: this.inmuebleForm.get('sedeUniversidad')?.value // Se debe agregar campo para sede
      },
      fechaPublicacion: this.inmuebleForm.get('fechaPublicacion')?.value
    };

    console.log('Datos enviados:', updatedInmueble);

    this.inmuebleService.updateInmueble(updatedInmueble).subscribe({
      next: () => {
        alert('Inmueble actualizado exitosamente!');
        this.router.navigate(['/arrendador/listar-inmuebles']);
      },
      error: (err) => {
        console.error('Error al actualizar el inmueble:', err);
        alert('Ocurrió un error al actualizar el inmueble.');
      }
    });
  }
}
