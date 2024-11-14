import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavbarArrendadorComponent} from '../navbar/navbar-arrendador/navbar-arrendador.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    NavbarArrendadorComponent,
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
