import { Component } from '@angular/core';

@Component({
  selector: 'app-infraestructura',
  standalone: false,
  templateUrl: './infraestructura.html',
  styleUrl: './infraestructura.css',
})
export class Infraestructura {
  // Galería de proyectos
  proyectos = [
    { src: '/assets/img/c1.jpeg', alt: 'Proyecto de construcción 1' },
    { src: '/assets/img/c2.jpeg', alt: 'Proyecto de construcción 2' },
    { src: '/assets/img/c3.jpeg', alt: 'Proyecto de construcción 3' },
    { src: '/assets/img/c4.jpeg', alt: 'Proyecto de construcción 4' },
    { src: '/assets/img/c5.jpeg', alt: 'Proyecto de construcción 5' },
    { src: '/assets/img/c6.jpeg', alt: 'Proyecto de construcción 6' },
    { src: '/assets/img/c7.jpeg', alt: 'Proyecto de construcción 7' },
    { src: '/assets/img/c8.jpeg', alt: 'Proyecto de construcción 8' },
  ];

  currentIndex = 0;
  itemsPerPage = 3;

  get visibleProyectos() {
    return this.proyectos.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  get canGoPrev() {
    return this.currentIndex > 0;
  }

  get canGoNext() {
    return this.currentIndex < this.proyectos.length - this.itemsPerPage;
  }

  prevSlide() {
    if (this.canGoPrev) {
      this.currentIndex = Math.max(0, this.currentIndex - this.itemsPerPage);
    }
  }

  nextSlide() {
    if (this.canGoNext) {
      // Avanza, pero asegura que siempre se muestren itemsPerPage imágenes
      const nextIndex = this.currentIndex + this.itemsPerPage;
      const maxIndex = this.proyectos.length - this.itemsPerPage;
      this.currentIndex = Math.min(nextIndex, maxIndex);
    }
  }
}
