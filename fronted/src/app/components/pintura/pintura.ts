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
    { src: '/assets/img/p3.jpeg', alt: 'Proyecto de pintura 2' },
    { src: '/assets/img/p5.jpeg', alt: 'Proyecto de pintura 3' },
    { src: '/assets/img/p4.jpeg', alt: 'Proyecto de pintura 4' },
    { src: '/assets/img/p7.jpeg', alt: 'Proyecto de pintura 5' },
    { src: '/assets/img/p6.jpeg', alt: 'Proyecto de pintura 6' },
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
    return this.currentIndex + this.itemsPerPage < this.proyectos.length;
  }

  prevSlide() {
    if (this.canGoPrev) {
      this.currentIndex -= this.itemsPerPage;
    }
  }

  nextSlide() {
    if (this.canGoNext) {
      this.currentIndex += this.itemsPerPage;
    }
  }
}
