import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Contactanos } from './components/contactanos/contactanos';
import { Servicios } from './components/servicios/servicios';
import { Nosotros } from './components/nosotros/nosotros';
import { Trabajos } from './components/trabajos/trabajos';

const routes: Routes = [
  {path:"", component:Inicio},
  {path:"inicio", component:Inicio},
   {path:"contactanos", component:Contactanos},
    {path:"servicio", component:Servicios},
     {path:"nosotros", component:Nosotros},
     {path:"trabajos", component:Trabajos}

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
