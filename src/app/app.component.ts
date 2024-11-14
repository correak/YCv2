import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatCard, MatCardTitle} from '@angular/material/card';
import {NavbarArrendadorComponent} from './components/navbar/navbar-arrendador/navbar-arrendador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCard, MatCardTitle, NavbarArrendadorComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'YCv2';
}
