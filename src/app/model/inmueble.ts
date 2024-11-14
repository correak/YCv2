import {Arrendador} from './arrendador';
import {Universidad} from './universidad';

export class Inmueble {
  id_Inmueble: number;
  direccion_Inmueble: string;
  tipo_Inmueble: string;
  precio_Inmueble: number;
  descripcion_Propiedad: string;
  estado_Propiedad: string;
  arrendador: Arrendador;
  universidad: Universidad;
  fechaPublicacion: Date;
}
