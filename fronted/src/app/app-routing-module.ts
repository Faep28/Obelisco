import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Contactanos } from './components/contactanos/contactanos';
import { Nosotros } from './components/nosotros/nosotros';
import { Trabajos } from './components/trabajos/trabajos';
import { Infraestructura } from './components/infraestructura/infraestructura';
import { Oficinas } from './components/oficinas/oficinas';
import { Mantenimiento } from './components/mantenimiento/mantenimiento';
import { Pintura } from './components/pintura/pintura';
import { Cristales } from './components/cristales/cristales';
import { Coberturas } from './components/coberturas/coberturas';

const routes: Routes = [
  {path:"", component:Inicio},
  {path:"inicio", component:Inicio},
  {path:"contactanos", component:Contactanos},
  {path:"nosotros", component:Nosotros},
  {path:"trabajos", component:Trabajos},
  {path:"infraestructura", component:Infraestructura},
  {path:"oficinas", component:Oficinas},
  {path:"mantenimiento", component:Mantenimiento},
  {path:"pintura", component:Pintura},
  {path:"cristales", component:Cristales},
  {path:"coberturas", component:Coberturas}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
