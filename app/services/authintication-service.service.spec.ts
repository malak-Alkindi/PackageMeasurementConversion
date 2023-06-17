import { TestBed } from '@angular/core/testing';

import { AuthinticationServiceService } from './authintication-service.service';

describe('AuthinticationServiceService', () => {
  let service: AuthinticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthinticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
