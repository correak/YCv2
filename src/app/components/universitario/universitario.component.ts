import { Component } from '@angular/core';
import {NavbarUniversitarioComponent} from '../navbar/navbar-universitario/navbar-universitario.component';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {FooterComponent} from '../arrendador/footer/footer.component';

@Component({
  selector: 'app-universitario',
  standalone: true,
  imports: [
    NavbarUniversitarioComponent,
    RouterOutlet,
    RouterLink,
    FooterComponent
  ],
  templateUrl: './universitario.component.html',
  styleUrl: './universitario.component.css'
})
export class UniversitarioComponent {
  constructor(private router: Router) {
  }
}
