import { TestBed } from '@angular/core/testing';

import { WorkoutsApiService } from './workouts-api.service';

describe('WorkoutsApiService', () => {
  let service: WorkoutsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkoutsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
