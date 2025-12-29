import { Component } from '@angular/core';

@Component({
  selector: 'app-oficinas',
  standalone: false,
  templateUrl: './oficinas.html',
  styleUrl: './oficinas.css',
})
export class Oficinas {
  // Galería de proyectos
  proyectos = [
    { src: '/assets/img/i10.jpeg', alt: 'Proyecto de implementación 1' },
    { src: '/assets/img/i2.jpeg', alt: 'Proyecto de implementación 2' },
    { src: '/assets/img/i3.jpeg', alt: 'Proyecto de implementación 3' },
    { src: '/assets/img/i4.jpeg', alt: 'Proyecto de implementación 4' },
    { src: '/assets/img/i5.jpeg', alt: 'Proyecto de implementación 5' },
    { src: '/assets/img/i6.jpeg', alt: 'Proyecto de implementación 6' },
    { src: '/assets/img/i7.jpeg', alt: 'Proyecto de implementación 7' },
    { src: '/assets/img/i8.jpeg', alt: 'Proyecto de implementación 8' },
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
