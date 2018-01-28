import { TestBed, inject } from '@angular/core/testing';

import { ReciboService } from './recibo.service';

describe('ReciboService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReciboService]
    });
  });

  it('should be created', inject([ReciboService], (service: ReciboService) => {
    expect(service).toBeTruthy();
  }));
});
