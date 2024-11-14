import { Component } from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar-arrendador',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    RouterLink
  ],
  templateUrl: './navbar-arrendador.component.html',
  styleUrl: './navbar-arrendador.component.css'
})
export class NavbarArrendadorComponent {

}
