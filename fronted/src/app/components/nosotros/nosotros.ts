import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  standalone: false,
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})
export class Nosotros {

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
