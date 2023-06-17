import { TestBed } from '@angular/core/testing';

import { CalculationServiceService } from './calculation-service.service';

describe('CalculationServiceService', () => {
  let service: CalculationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
