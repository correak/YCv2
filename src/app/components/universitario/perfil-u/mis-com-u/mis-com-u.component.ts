import { Component } from '@angular/core';
import {Universitario} from '../../../../model/universitario';
import {HUUniversitarioComentarioDto} from '../../../../model/huuniversitario-comentario-dto';
import {ComentarioService} from '../../../../services/comentario.service';
import {UniversitarioService} from '../../../../services/universitario.service';
import {DatePipe, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-mis-com-u',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './mis-com-u.component.html',
  styleUrl: './mis-com-u.component.css'
})
export class MisComUComponent {
  universitarios: Universitario[] = [];
  comentarios: HUUniversitarioComentarioDto[] = [];
  selectedUniversitario: Universitario | undefined;

  constructor(
    private comentarioService: ComentarioService,
    private universitarioService: UniversitarioService
  ) {}

  ngOnInit(): void {
    this.getUniversitarios();
  }

  getUniversitarios(): void {
    this.universitarioService.getUniversitarios().subscribe(
      (data) => {
        this.universitarios = data;
      },
      (error) => {
        console.error('Error al obtener los universitarios:', error);
      }
    );
  }

  onUniversitarioChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const universitarioId = Number(selectElement.value);

    this.comentarioService.getComentariosPorUniversitario(universitarioId).subscribe(
      (data) => {
        this.comentarios = data;
      },
      (error) => {
        console.error('Error al obtener los comentarios:', error);
      }
    );
  }
}
