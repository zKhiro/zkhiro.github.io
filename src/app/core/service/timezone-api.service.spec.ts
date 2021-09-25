import { TestBed } from '@angular/core/testing';

import { TimezoneApiService } from './timezone-api.service';

describe('TimezoneApiService', () => {
  let service: TimezoneApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimezoneApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
