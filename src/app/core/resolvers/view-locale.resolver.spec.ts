import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { viewLocaleResolver } from './view-locale.resolver';

describe('viewLocaleResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => viewLocaleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
