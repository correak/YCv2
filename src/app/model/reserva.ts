import {Universitario} from './universitario';
import {Inmueble} from './inmueble';

export class Reserva {
  id_Reserva: number;
  fecha_Reserva: Date;
  comentario: string;
  universitario: Universitario;
  inmueble: Inmueble;
}
