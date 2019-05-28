import { TestBed } from '@angular/core/testing';

import { GetStoresDataService } from './get-stores-data.service';

describe('GetStoresDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetStoresDataService = TestBed.get(GetStoresDataService);
    expect(service).toBeTruthy();
  });
});
