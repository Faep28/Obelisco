import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Inicio } from './components/inicio/inicio';
import { Nosotros } from './components/nosotros/nosotros';
import { Contactanos } from './components/contactanos/contactanos';
import { Header } from './header/header';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Trabajos } from './components/trabajos/trabajos';
import { Infraestructura } from './components/infraestructura/infraestructura';
import { Oficinas } from './components/oficinas/oficinas';
import { Mantenimiento } from './components/mantenimiento/mantenimiento';
import { Pintura } from './components/pintura/pintura';
import { Cristales } from './components/cristales/cristales';
import { Coberturas } from './components/coberturas/coberturas';

@NgModule({
  declarations: [
    App,
    Inicio,
    Nosotros,
    Contactanos,
    Header,
    Trabajos,
    Infraestructura,
    Oficinas,
    Mantenimiento,
    Pintura,
    Cristales,
    Coberturas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
