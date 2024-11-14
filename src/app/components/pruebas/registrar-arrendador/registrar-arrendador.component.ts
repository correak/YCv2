import {Component, inject} from '@angular/core';
import {MatCard} from '@angular/material/card';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {ArrendadorService} from '../../../services/arrendador.service';
import {ActivatedRoute, Params, Router, RouterLink} from '@angular/router';
import {Arrendador} from '../../../model/arrendador';

@Component({
  selector: 'app-registrar-arrendador',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel,
    MatCard,
    ReactiveFormsModule,
    MatButton,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterLink,
  ],
  templateUrl: './registrar-arrendador.component.html',
  styleUrl: './registrar-arrendador.component.css'
})
export class RegistrarArrendadorComponent {

  arrendadorForm: FormGroup;
  fb = inject(FormBuilder);
  arrendadorService: ArrendadorService = inject(ArrendadorService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  edicion: boolean = false;
  id: number = 0

  constructor() {
    this.arrendadorForm = this.fb.group({
      id_Arrendador: [''],
      dni_Arrendador: ['', Validators.required],
      nombre_Arrendador: ['', Validators.required],
      telefono_Arrendador: ['', Validators.required],
      email_Arrendador: ['', Validators.required]
    })
  }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.cargaForm();
    });
  }
  private cargaForm() {
    if (this.edicion) {
      this.arrendadorService.buscarArrendadorId(this.id).subscribe((data: Arrendador) => {
        this.arrendadorForm.patchValue({
          dni_Arrendador: data.dni_Arrendador,
          nombre_Arrendador: data.nombre_Arrendador,
          telefono_Arrendador: data.telefono_Arrendador,
          email_Arrendador: data.email_Arrendador
        });
      });
    }
  }

  onSubmit() {
    if (this.arrendadorForm.valid) {
      const arrendador: Arrendador = new Arrendador();
      arrendador.id_Arrendador = this.id;
      arrendador.dni_Arrendador = this.arrendadorForm.value.dni_Arrendador;
      arrendador.nombre_Arrendador = this.arrendadorForm.value.nombre_Arrendador;
      arrendador.telefono_Arrendador = this.arrendadorForm.value.telefono_Arrendador;
      arrendador.email_Arrendador = this.arrendadorForm.value.email_Arrendador;

      if (!this.edicion) {
        console.log("Datos aceptado:", arrendador);
        this.arrendadorService.postArrendadores(arrendador).subscribe((data: Object): void => {
            console.log("Datos insertados:", data);
          }
        );
      } else {
        console.log("Datos aceptado:", arrendador);
        this.arrendadorService.putArrendaor(arrendador).subscribe((data: Object): void => {
            console.log("Datos actualizados:", data);
          }
        );
      }
      this.router.navigate(['/arrendador/listar-inmuebles/listaInmueble']);
    } else {
      console.log("Formulario no valido");
    }
  }
}
