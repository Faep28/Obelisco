import { Component } from '@angular/core';

@Component({
  selector: 'app-coberturas',
  standalone: false,
  templateUrl: './coberturas.html',
  styleUrl: './coberturas.css',
})
export class Coberturas {
  // Galería de proyectos
  proyectos = [
    { src: '/assets/img/co1.jpeg', alt: 'Proyecto de coberturas 1' },
    { src: '/assets/img/co2.jpeg', alt: 'Proyecto de coberturas 2' },
    { src: '/assets/img/co4.jpeg', alt: 'Proyecto de coberturas 4' },
    { src: '/assets/img/co5.jpeg', alt: 'Proyecto de coberturas 5' },
    { src: '/assets/img/co6.jpeg', alt: 'Proyecto de coberturas 6' },
    { src: '/assets/img/co13.jpeg', alt: 'Proyecto de coberturas 7' },
    { src: '/assets/img/co8.jpeg', alt: 'Proyecto de coberturas 8' },
    { src: '/assets/img/co9.jpeg', alt: 'Proyecto de coberturas 9' },
    { src: '/assets/img/co10.jpeg', alt: 'Proyecto de coberturas 10' },
    { src: '/assets/img/co11.jpeg', alt: 'Proyecto de coberturas 11' },
    { src: '/assets/img/co12.jpeg', alt: 'Proyecto de coberturas 12' },
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
