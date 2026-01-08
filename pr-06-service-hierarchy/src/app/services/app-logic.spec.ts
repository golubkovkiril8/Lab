import { TestBed } from '@angular/core/testing';

import { AppLogic } from './app-logic';

describe('AppLogic', () => {
  let service: AppLogic;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppLogic);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
