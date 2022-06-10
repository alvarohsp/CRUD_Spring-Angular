import { TestBed } from '@angular/core/testing';

import { FuncionariosListaService } from './funcionarios-lista.service';

describe('FuncionariosListaService', () => {
  let service: FuncionariosListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuncionariosListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
