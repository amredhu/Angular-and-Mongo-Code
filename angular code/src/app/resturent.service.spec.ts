import { TestBed } from '@angular/core/testing';

import { ResturentService } from './resturent.service';

describe('ResturentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResturentService = TestBed.get(ResturentService);
    expect(service).toBeTruthy();
  });
});
