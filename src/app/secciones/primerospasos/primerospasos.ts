import { Component } from '@angular/core';

@Component({
  selector: 'app-primerospasos',
  imports: [],
  standalone: true,  
  templateUrl: './primerospasos.html',
  styleUrl: './primerospasos.css',
})
export class Primerospasos {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openId === id;
  }
}


