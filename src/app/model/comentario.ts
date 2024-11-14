import {Inmueble} from './inmueble';
import {Universitario} from './universitario';

export class Comentario {
  id_Comentario: number;
  contenido: string;
  calificacion: number;
  fecha: Date = new Date();
  universitario: Universitario = new Universitario();
  inmueble: Inmueble = new Inmueble()
}
