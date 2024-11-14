import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatCard, MatCardContent} from '@angular/material/card';

@Component({
  selector: 'app-ver-inmueble',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent
  ],
  templateUrl: './ver-inmueble.component.html',
  styleUrl: './ver-inmueble.component.css'
})
export class VerInmuebleComponent {

}
