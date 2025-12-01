import { Component } from '@angular/core';

@Component({
  selector: 'app-justificacion',
  standalone: true,
  imports: [],
  templateUrl: './justificacion.html',
  styleUrl: './justificacion.css',
})

export class Justificacion {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }
  
  isOpen(id: string): boolean {
    return this.openId === id;
  }  
}

