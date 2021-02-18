import { TestBed } from '@angular/core/testing';

import { GlesesService } from './gleses.service';

describe('GlesesService', () => {
  let service: GlesesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlesesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
