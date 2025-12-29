import { Component } from '@angular/core';

@Component({
  selector: 'app-mantenimiento',
  standalone: false,
  templateUrl: './mantenimiento.html',
  styleUrl: './mantenimiento.css',
})
export class Mantenimiento {
  // Galería de proyectos
  proyectos = [
    { src: '/assets/img/m1.jpeg', alt: 'Proyecto de mantenimiento 1' },
    { src: '/assets/img/m2.jpeg', alt: 'Proyecto de mantenimiento 2' },
    { src: '/assets/img/m3.jpeg', alt: 'Proyecto de mantenimiento 3' },
    { src: '/assets/img/m4.jpeg', alt: 'Proyecto de mantenimiento 4' },
    { src: '/assets/img/m9.jpeg', alt: 'Proyecto de mantenimiento 5' },
    { src: '/assets/img/m6.jpeg', alt: 'Proyecto de mantenimiento 6' },
    { src: '/assets/img/m7.jpeg', alt: 'Proyecto de mantenimiento 7' },
    { src: '/assets/img/m8.jpeg', alt: 'Proyecto de mantenimiento 8' },
    { src: '/assets/img/z1.jpeg', alt: 'Proyecto de construcción 14' },
     { src: '/assets/img/i12copia.jpeg', alt: 'Proyecto de construcción 15' },

    
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
