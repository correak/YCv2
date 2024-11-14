import {Component, inject} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {UniversitarioService} from '../../../services/universitario.service';
import {Universitario} from '../../../model/universitario';
import {UniversidadService} from '../../../services/universidad.service';

@Component({
  selector: 'app-registrar-universitario',
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
  templateUrl: './registrar-universitario.component.html',
  styleUrl: './registrar-universitario.component.css'
})
export class RegistrarUniversitarioComponent {
  universitarioForm: FormGroup;
  fb = inject(FormBuilder);
  universitarioService = inject(UniversitarioService);
  router:Router = inject(Router);

  constructor() {
    this.universitarioForm = this.fb.group({
      id_Universitario: [''],
      dni_Universitario: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      nombre_Universitario: ['', Validators.required],
      email_Universitario: ['', [Validators.required, Validators.email]],
      telefono_Universitario: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.universitarioForm.valid) {
      const universitario: Universitario = this.universitarioForm.value;
      this.universitarioService.postUniversitario(universitario).subscribe(response => {
        console.log("Universitario registrado:", response);
      });
    } else {
      console.log("Formulario no válido");
    }
  }
}
