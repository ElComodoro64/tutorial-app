import { Component } from '@angular/core';

@Component({
  selector: 'app-utilizacion',
  imports: [],
  standalone: true,    
  templateUrl: './utilizacion.html',
  styleUrl: './utilizacion.css',
})
export class Utilizacion {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openId === id;
  }
}
