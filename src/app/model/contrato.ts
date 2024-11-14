import {Reserva} from './reserva';

export class Contrato {
  id_Contrato: number;
  fecha_Contrato: Date;
  comentario: string;
  reserva: Reserva;
}
