import { TestBed } from '@angular/core/testing';

import { LocaleService } from './locale.service';


describe('TranslationsService', () => {
  let service: LocaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
