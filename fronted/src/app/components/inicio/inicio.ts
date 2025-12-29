import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {


  currentSlide = 0; // Índice de la imagen actual
  slides = [
    {
      image: '/assets/img/fondo2.5.jpeg',
      title: 'Construcción',
      description: 'Edificaciones e Infraestructura.'
    },
    {
      image: '/assets/img/fondo5.jpeg',
      title: 'Servicios Generales',
      description: 'Implementaciones y mantenimiento.'
    }
  ];

  // Propiedades para el texto de la imagen actual
  titulo: string = this.slides[this.currentSlide].title;
  descripcion: string = this.slides[this.currentSlide].description;

  constructor() { }

  ngOnInit() {
    // Iniciar el slider para que cambie automáticamente cada 3 segundos
    setInterval(() => {
      this.changeSlide((this.currentSlide + 1) % this.slides.length);
    }, 3000);
  }

  // Cambiar la imagen y el texto
  changeSlide(index: number): void {
    this.currentSlide = index;
    this.titulo = this.slides[this.currentSlide].title;
    this.descripcion = this.slides[this.currentSlide].description;
  }

  // Cambiar imagen al hacer clic en el botón de navegación (bolita)
  changeSlideManually(index: number): void {
    this.changeSlide(index);
  }

  // Scroll suave a la sección de servicios
  scrollToServicios(): void {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ===== Carrusel de Clientes =====
  clientesOffset = 0;
  clienteWidth = 190; // ancho del logo + gap
  totalClientes = 23;
  visibleClientes = 5;
  moveCount = 3; // cantidad de logos que se mueven por click

  prevClientes(): void {
    if (this.clientesOffset < 0) {
      this.clientesOffset += this.clienteWidth * this.moveCount;
      if (this.clientesOffset > 0) {
        this.clientesOffset = 0;
      }
    }
  }

  nextClientes(): void {
    const maxOffset = -((this.totalClientes - this.visibleClientes) * this.clienteWidth);
    if (this.clientesOffset > maxOffset) {
      this.clientesOffset -= this.clienteWidth * this.moveCount;
      if (this.clientesOffset < maxOffset) {
        this.clientesOffset = maxOffset;
      }
    }
  }

}
