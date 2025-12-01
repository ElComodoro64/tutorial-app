import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionamiento',
  imports: [],
  standalone: true,    
  templateUrl: './funcionamiento.html',
  styleUrl: './funcionamiento.css',
})
export class Funcionamiento {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openId === id;
  }
}
