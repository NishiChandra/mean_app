import { TestBed } from '@angular/core/testing';

import { GetSalesDataService } from './get-sales-data.service';

describe('GetSalesDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSalesDataService = TestBed.get(GetSalesDataService);
    expect(service).toBeTruthy();
  });
});
