import { Component } from '@angular/core';

@Component({
  selector: 'app-cristales',
  standalone: false,
  templateUrl: './cristales.html',
  styleUrl: './cristales.css',
})
export class Cristales {
  // Galería de proyectos
  proyectos = [
    { src: '/assets/img/cr1.jpeg', alt: 'Proyecto de cristales 1' },
    { src: '/assets/img/cr2.jpeg', alt: 'Proyecto de cristales 2' },
    { src: '/assets/img/cr3.jpeg', alt: 'Proyecto de cristales 3' },
    { src: '/assets/img/cr4.jpeg', alt: 'Proyecto de cristales 4' },
    { src: '/assets/img/cr5.jpeg', alt: 'Proyecto de cristales 5' },
    { src: '/assets/img/cr6.jpeg', alt: 'Proyecto de cristales 6' },
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
