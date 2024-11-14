import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import {MatCell, MatHeaderCell, MatTable} from '@angular/material/table';

@Component({
  selector: 'app-perfil-u',
  standalone: true,
  imports: [
    RouterLink,
    MatIconButton,
    MatIcon,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatButton,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    RouterOutlet,
  ],
  templateUrl: './perfil-u.component.html',
  styleUrl: './perfil-u.component.css'
})
export class PerfilUComponent {

}
