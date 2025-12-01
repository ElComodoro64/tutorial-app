import { Component } from '@angular/core';

@Component({
  selector: 'app-instalacion',
  standalone: true,  
  imports: [],
  templateUrl: './instalacion.html',
  styleUrl: './instalacion.css',
})
export class Instalacion {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }
  
  isOpen(id: string): boolean {
    return this.openId === id;
  }  
}




