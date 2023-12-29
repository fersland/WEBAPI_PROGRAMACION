import { TestBed } from '@angular/core/testing';

import { LenguajeService } from './lenguaje.service';

describe('LenguajeService', () => {
  let service: LenguajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
