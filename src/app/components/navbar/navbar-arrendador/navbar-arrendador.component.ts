import { Component } from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-navbar-arrendador',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    RouterLink,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger
  ],
  templateUrl: './navbar-arrendador.component.html',
  styleUrl: './navbar-arrendador.component.css'
})
export class NavbarArrendadorComponent {

}
