import { Component } from '@angular/core';

@Component({
  selector: 'app-recursos',
  imports: [],
  standalone: true,   
  templateUrl: './recursos.html',
  styleUrl: './recursos.css',
})
export class Recursos {
  openId: string | null = null;

  toggleApartado(id: string): void {
    this.openId = this.openId === id ? null : id;
  }

  isOpen(id: string): boolean {
    return this.openId === id;
  }
}
