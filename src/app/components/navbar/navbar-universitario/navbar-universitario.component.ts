import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar-universitario',
  standalone: true,
  imports: [
    MatButton,
    MatIconButton,
    RouterLink,
    MatIcon,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem
  ],
  templateUrl: './navbar-universitario.component.html',
  styleUrl: './navbar-universitario.component.css'
})
export class NavbarUniversitarioComponent {

}
