import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  imports: [],
  standalone: true,    
  templateUrl: './ejemplo.html',
  styleUrl: './ejemplo.css',
})
export class Ejemplo {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openId === id;
  }
}
