import { TestBed } from '@angular/core/testing';

import { ChangeproductsService } from './changeproducts.service';

describe('ChangeproductsService', () => {
  let service: ChangeproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
