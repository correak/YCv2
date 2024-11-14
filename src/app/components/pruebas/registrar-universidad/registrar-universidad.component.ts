import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UniversidadService} from '../../../services/universidad.service';
import {Universidad} from '../../../model/universidad';

@Component({
  selector: 'app-registrar-universidad',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './registrar-universidad.component.html',
  styleUrl: './registrar-universidad.component.css'
})
export class RegistrarUniversidadComponent {
  universidadForm: FormGroup;
  fb = inject(FormBuilder);
  universidadService: UniversidadService= inject(UniversidadService);
  router: Router = inject(Router);
  route: ActivatedRoute = inject(ActivatedRoute);
  id: number = 0

  constructor() {
    this.universidadForm = this.fb.group({
      id_Universidad: [''],
      nombre: ['', Validators.required],
      sede_Universidad: ['', Validators.required]
    })
  }


  onSubmit() {
    if (this.universidadForm.valid) {
      const universidad: Universidad = new Universidad();
      universidad.id_Universidad = this.id;
      universidad.nombre= this.universidadForm.value.nombre;
      universidad.sede_Universidad = this.universidadForm.value.sede_Universidad

      this.universidadService.postUniversidad(universidad).subscribe((data: Object): void => {
          console.log("Datos insertados:", data);
        }
      );
    }else {
      console.log("Formulario no valido");
    }
  }
}
