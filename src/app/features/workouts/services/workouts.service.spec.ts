import { TestBed } from '@angular/core/testing';
import { LoaderService } from 'src/app/core/services/loader.service';
import { WorkoutsApiService } from 'src/app/core/services/workouts-api.service';

import { WorkoutsService } from './workouts.service';
import { RouterTestingModule } from '@angular/router/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

const apiMethods = [
  'getWorkout',
  'getWorkouts',
  'deleteWorkout',
  'createWorkout',
  'updateWorkout',
  'onWorkoutsReceive',
];

describe('WorkoutsService', () => {
  let service: WorkoutsService;
  let workoutsApiServiceSpy: jasmine.SpyObj<WorkoutsApiService>;
  let loaderServiceSpy: jasmine.SpyObj<LoaderService>;

  beforeEach(() => {
    workoutsApiServiceSpy = jasmine.createSpyObj(
      'WorkoutsApiService',
      apiMethods
    );
    loaderServiceSpy = jasmine.createSpyObj('LoaderService', ['hide', 'show']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        WorkoutsService,
        {
          provide: WorkoutsApiService,
          useValue: workoutsApiServiceSpy,
        },
        {
          provide: LoaderService,
          useValue: loaderServiceSpy,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(WorkoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('deleteWorkoutById()', () => {
    it('should delete workout by id', (done: DoneFn) => {
      spyOn(service, 'getWorkouts' as any).and.returnValue(of([{}]));
      spyOn(service, 'onWorkoutsReceive' as any);
      workoutsApiServiceSpy.deleteWorkout.and.returnValue(of({}));

      service.deleteWorkoutById(2).subscribe(() => {
        expect(service['getWorkouts']).toHaveBeenCalled();
        expect(service['onWorkoutsReceive']).toHaveBeenCalled();

        done();
      });
    });
  });

  describe('getWorkouts()', () => {
    it('should get workouts', (done: DoneFn) => {
      workoutsApiServiceSpy.getWorkouts.and.returnValue(of([]));

      service['getWorkouts']().subscribe(() => {
        expect(workoutsApiServiceSpy.getWorkouts).toHaveBeenCalled();

        done();
      });
    });
  });
});
