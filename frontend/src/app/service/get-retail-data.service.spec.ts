import { TestBed } from '@angular/core/testing';

import { GetRetailDataService } from './get-retail-data.service';

describe('GetRetailDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRetailDataService = TestBed.get(GetRetailDataService);
    expect(service).toBeTruthy();
  });
});
