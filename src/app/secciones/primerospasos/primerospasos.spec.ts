import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Primerospasos } from './primerospasos';

describe('Primerospasos', () => {
  let component: Primerospasos;
  let fixture: ComponentFixture<Primerospasos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Primerospasos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Primerospasos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
