import { Component } from '@angular/core';
import {InmueblesUComponent} from '../../universitario/inmuebles-u/inmuebles-u.component';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [
    InmueblesUComponent
  ],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})
export class DepartamentosComponent {

}
