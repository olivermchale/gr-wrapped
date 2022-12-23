import { TestBed } from '@angular/core/testing';

import { StatGenerationService } from './stat-generation.service';

describe('StatGenerationService', () => {
  let service: StatGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
