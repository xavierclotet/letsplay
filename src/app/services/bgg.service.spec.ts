import { TestBed, inject } from '@angular/core/testing';

import { BggService } from './bgg.service';

describe('BggService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BggService]
    });
  });

  it('should be created', inject([BggService], (service: BggService) => {
    expect(service).toBeTruthy();
  }));
});
