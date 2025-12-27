import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  standalone: false,
  templateUrl: './contactanos.html',
  styleUrl: './contactanos.css',
})
export class Contactanos {

  formulario = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  };

  enviarMensaje(): void {
    // Validar campos requeridos
    if (!this.formulario.nombre || !this.formulario.email || !this.formulario.asunto || !this.formulario.mensaje) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    // Construir mensaje para WhatsApp
    const mensaje = `*Nuevo mensaje desde la web*%0A%0A` +
      `*Nombre:* ${this.formulario.nombre}%0A` +
      `*Email:* ${this.formulario.email}%0A` +
      `*Teléfono:* ${this.formulario.telefono || 'No proporcionado'}%0A` +
      `*Asunto:* ${this.formulario.asunto}%0A%0A` +
      `*Mensaje:*%0A${this.formulario.mensaje}`;

    // Abrir WhatsApp con el mensaje
    const whatsappUrl = `https://wa.me/51946109566?text=${mensaje}`;
    window.open(whatsappUrl, '_blank');

    // Limpiar formulario
    this.formulario = {
      nombre: '',
      email: '',
      telefono: '',
      asunto: '',
      mensaje: ''
    };
  }

}
