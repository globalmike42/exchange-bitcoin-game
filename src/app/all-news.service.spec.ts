import { TestBed } from '@angular/core/testing';

import { AllNewsService } from './all-news.service';

describe('AllNewsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllNewsService = TestBed.get(AllNewsService);
    expect(service).toBeTruthy();
  });
});
