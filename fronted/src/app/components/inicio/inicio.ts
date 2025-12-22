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
      image: '/assets/img/fondo1.jpeg',
      title: 'Construcción',
      description: 'Proyectos de calidad que impulsan tu futuro.'
    },
    {
      image: '/assets/img/fondo5.jpeg',
      title: 'Servicios Generales',
      description: 'Trabajos de albañilería, pintura, y más.'
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
  

}
