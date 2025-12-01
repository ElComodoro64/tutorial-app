import { Component } from '@angular/core';

@Component({
  selector: 'app-conclusiones',
  imports: [],
  standalone: true,   
  templateUrl: './conclusiones.html',
  styleUrl: './conclusiones.css',
})
export class Conclusiones {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openId === id;
  }
}
