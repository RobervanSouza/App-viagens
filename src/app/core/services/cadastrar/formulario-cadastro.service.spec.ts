import { TestBed } from '@angular/core/testing';

import { FormularioCadastroService } from './formulario-cadastro.service';

describe('FormularioCadastroService', () => {
  let service: FormularioCadastroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormularioCadastroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
