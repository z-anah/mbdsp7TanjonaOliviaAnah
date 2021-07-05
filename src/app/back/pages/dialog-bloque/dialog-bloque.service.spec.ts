import { TestBed } from '@angular/core/testing';

import { DialogBloqueService } from './dialog-bloque.service';

describe('DialogBloqueService', () => {
  let service: DialogBloqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogBloqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
