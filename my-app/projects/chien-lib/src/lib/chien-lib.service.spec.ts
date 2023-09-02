import { TestBed } from '@angular/core/testing';

import { ChienLibService } from './chien-lib.service';

describe('ChienLibService', () => {
  let service: ChienLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChienLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
