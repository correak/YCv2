import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ListarInmueblesComponent} from './components/arrendador/listar-inmuebles/listar-inmuebles.component';
import {ArrendadorComponent} from './components/arrendador/arrendador.component';
import {VerInmuebleComponent} from './components/arrendador/listar-inmuebles/ver-inmueble/ver-inmueble.component';
import {
  ListaInmueblesComponent
} from './components/arrendador/listar-inmuebles/lista-inmuebles/lista-inmuebles.component';
import {
  ContarInmuebleComponent
} from './components/arrendador/listar-inmuebles/contar-inmueble/contar-inmueble.component';
import {ListaReservasComponent} from './components/arrendador/listar-inmuebles/lista-reservas/lista-reservas.component';
import {
  ReservasRecientesComponent
} from './components/arrendador/listar-inmuebles/reservas-recientes/reservas-recientes.component';
import {
  ListaContratosComponent
} from './components/arrendador/listar-inmuebles/lista-contratos/lista-contratos.component';
import {
  BusquedaContratoComponent
} from './components/arrendador/listar-inmuebles/busqueda-contrato/busqueda-contrato.component';
import {
  RegistraContratoComponent
} from './components/arrendador/listar-inmuebles/registra-contrato/registra-contrato.component';
import {UniversitarioComponent} from './components/universitario/universitario.component';
import {RegistrarArrendadorComponent} from './components/pruebas/registrar-arrendador/registrar-arrendador.component';
import {
  RegistrarUniversidadComponent
} from './components/pruebas/registrar-universidad/registrar-universidad.component';
import {RegistrarInmuebleComponent} from './components/pruebas/registrar-inmueble/registrar-inmueble.component';
import {
  RegistrarUniversitarioComponent
} from './components/pruebas/registrar-universitario/registrar-universitario.component';
import {RegistrarComentarioComponent} from './components/pruebas/registrar-comentario/registrar-comentario.component';
import {RegistrarReservaComponent} from './components/pruebas/registrar-reserva/registrar-reserva.component';
import {RegistrarContratoComponent} from './components/pruebas/registrar-contrato/registrar-contrato.component';
import {InicioComponent} from './components/arrendador/inicio/inicio.component';
import {
  UniverisdadesArrendadorComponent
} from './components/arrendador/univerisdades-arrendador/univerisdades-arrendador.component';
import {DetalleInmuebleComponent} from './components/arrendador/detalle-inmueble/detalle-inmueble.component';
import {InicioUComponent} from './components/universitario/inicio-u/inicio-u.component';
import {DetalleInmuebleUComponent} from './components/universitario/detalle-inmueble-u/detalle-inmueble-u.component';
import {
  ComentariosInmuebleUComponent
} from './components/universitario/comentarios-inmueble-u/comentarios-inmueble-u.component';
import {
  UniverisdadesUniversitariosComponent
} from './components/universitario/univerisdades-universitarios/univerisdades-universitarios.component';
import {InmueblesUComponent} from './components/universitario/inmuebles-u/inmuebles-u.component';
import {
  TodosinmueblesUComponent
} from './components/universitario/inmuebles-u/todosinmuebles-u/todosinmuebles-u.component';
import {
  InmuebleUniversidadUComponent
} from './components/universitario/inmuebles-u/inmueble-universidad-u/inmueble-universidad-u.component';
import {InmuebleTipoUComponent} from './components/universitario/inmuebles-u/inmueble-tipo-u/inmueble-tipo-u.component';
import {
  InmueblesOrdCalificacionComponent
} from './components/universitario/inmuebles-u/inmuebles-ord-calificacion/inmuebles-ord-calificacion.component';
import {
  InmuebleOrdFechaUComponent
} from './components/universitario/inmuebles-u/inmueble-ord-fecha-u/inmueble-ord-fecha-u.component';
import {
  InmuebleRangoUComponent
} from './components/universitario/inmuebles-u/inmueble-rango-u/inmueble-rango-u.component';
import {
  InmuebleOrdPrecioUComponent
} from './components/universitario/inmuebles-u/inmueble-ord-precio-u/inmueble-ord-precio-u.component';
import {PerfilUComponent} from './components/universitario/perfil-u/perfil-u.component';
import {DatosUComponent} from './components/universitario/perfil-u/datos-u/datos-u.component';
import {MisReservasUComponent} from './components/universitario/perfil-u/mis-reservas-u/mis-reservas-u.component';
import {MisComUComponent} from './components/universitario/perfil-u/mis-com-u/mis-com-u.component';
import {
  RegistraInmuebleComponent
} from './components/arrendador/listar-inmuebles/registra-inmueble/registra-inmueble.component';
import {DepartamentosComponent} from './components/arrendador/departamentos/departamentos.component';
import {EditaInmuebleComponent} from './components/arrendador/listar-inmuebles/edita-inmueble/edita-inmueble.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'arrendador', component: ArrendadorComponent, children: [
    {path: 'inmueble/:id', component: DetalleInmuebleComponent },
    {path: 'inicio',component: InicioComponent},
    {path: 'universidades',component:UniverisdadesArrendadorComponent},
      {path: 'departamentos',component:DepartamentosComponent},
    {path:'listar-inmuebles',component:ListarInmueblesComponent, children: [
        {path: 'registraInmueble',component:RegistraInmuebleComponent},
        {path: 'verInmueble',component:VerInmuebleComponent},
        {path: 'listaInmueble',component:ListaInmueblesComponent},
        {path: 'editaInmueble/:id',component:EditaInmuebleComponent},
        {path: 'contarInmueble', component:ContarInmuebleComponent},
        {path: 'listaReserva', component: ListaReservasComponent},
        {path: 'reservasRecientes', component: ReservasRecientesComponent},
        {path: 'listaContrato', component: ListaContratosComponent},
        {path: 'busquedaContrato', component: BusquedaContratoComponent},
        {path: 'registraContrato', component: RegistraContratoComponent},

      ]}
    ]},

  {path: 'universitario', component: UniversitarioComponent, children:[
      {path: 'inicioU',component:InicioUComponent},
      {path: 'inmuebleU/:id', component: DetalleInmuebleUComponent},
      {path:'inmuebleU/:id/comentarios', component: ComentariosInmuebleUComponent},
      {path: 'universidadesU',component:UniverisdadesUniversitariosComponent},
      {path: 'inmueblesU',component: InmueblesUComponent,children: [
          {path:'todosInmueblesU',component:TodosinmueblesUComponent},
          {path:'inmuebleUniversidadU/:nombreUniversidad', component:InmuebleUniversidadUComponent},
          {path:'tipoInmuebleU/:tipo', component: InmuebleTipoUComponent},
          { path: 'inmueblesOrdCalificacionU', component: InmueblesOrdCalificacionComponent},
          { path: 'inmuebleOrdFechaU', component: InmuebleOrdFechaUComponent},
          { path: 'rangoPreciosU/:precioMin/:precioMax', component: InmuebleRangoUComponent},
          { path: 'ordenadosPorPrecioU/:orden', component: InmuebleOrdPrecioUComponent},
        ]},
      {path: "perfilU", component: PerfilUComponent,children: [
          {path: "datosU",component: DatosUComponent},
          {path: "misReservasU",component: MisReservasUComponent},
          {path: "misComU",component: MisComUComponent},
        ]}
    ]},

  {path: 'registrarArrendador', component: RegistrarArrendadorComponent},
  {path: 'registrarUniversidad', component: RegistrarUniversidadComponent},
  {path: 'registrarInmueble', component: RegistrarInmuebleComponent},
  {path: 'registrarUniversitario', component: RegistrarUniversitarioComponent},
  {path: 'registrarComentario', component: RegistrarComentarioComponent},
  {path:'registrarReserva', component:RegistrarReservaComponent},
  {path:'registrarContrato', component:RegistrarContratoComponent}
];
