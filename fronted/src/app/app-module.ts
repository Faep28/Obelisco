import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Inicio } from './components/inicio/inicio';
import { Nosotros } from './components/nosotros/nosotros';
import { Servicios } from './components/servicios/servicios';
import { Contactanos } from './components/contactanos/contactanos';
import { Header } from './header/header';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material-module';
import { F } from '@angular/cdk/keycodes';
import { ReactiveFormsModule } from '@angular/forms';
import { Trabajos } from './components/trabajos/trabajos';

@NgModule({
  declarations: [
    App,
    Inicio,
    Nosotros,
    Servicios,
    Contactanos,
    Header,
    Trabajos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
