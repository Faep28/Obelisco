import { Component } from '@angular/core';

@Component({
  selector: 'app-pintura',
  standalone: false,
  templateUrl: './pintura.html',
  styleUrl: './pintura.css',
})
export class Pintura {
  // Galería de proyectos
  proyectos = [
    { src: '/assets/img/p1.jpeg', alt: 'Proyecto de pintura 1' },
    { src: '/assets/img/p30.jpeg', alt: 'Proyecto de pintura 2' },
    { src: '/assets/img/p31.jpeg', alt: 'Proyecto de pintura 3' },
    { src: '/assets/img/pchurro.jpeg', alt: 'Proyecto de pintura 4' },
    { src: '/assets/img/p6.jpeg', alt: 'Proyecto de pintura 6' },
    { src: '/assets/img/p8copia.jpeg', alt: 'Proyecto de pintura 7' },
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
      const nextIndex = this.currentIndex + this.itemsPerPage;
      const maxIndex = this.proyectos.length - this.itemsPerPage;
      this.currentIndex = Math.min(nextIndex, maxIndex);
    }
  }
}
