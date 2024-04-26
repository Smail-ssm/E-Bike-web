import { TestBed } from '@angular/core/testing';

import { ServiceuserService } from './serviceuser.service';

describe('ServiceuserService', () => {
  let service: ServiceuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
