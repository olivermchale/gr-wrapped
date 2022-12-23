import { TestBed } from '@angular/core/testing';

import { GoodreadsScraperService } from './goodreads-scraper.service';

describe('GoodreadsScraperService', () => {
  let service: GoodreadsScraperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodreadsScraperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
