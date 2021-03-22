import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';

import { Workout } from 'src/app/core/models/workout.model';
import { LoaderService } from 'src/app/core/services/loader.service';
import { WorkoutsApiService } from 'src/app/core/services/workouts-api.service';

@Injectable()
export class WorkoutsService {
  private workoutsSubject: BehaviorSubject<Workout[]> = new BehaviorSubject<
    Workout[]
  >([]);
  workouts$: Observable<Workout[]> = this.workoutsSubject.asObservable();

  constructor(
    private workoutsApiService: WorkoutsApiService,
    private loaderService: LoaderService
  ) {}

  loadWorkouts(): Observable<Workout[]> {
    this.loaderService.show();

    return this.getWorkouts().pipe(
      tap((workouts) => this.omWorkoutsReceive(workouts)),
      finalize(() => this.loaderService.hide())
    );
  }

  deleteWorkoutById(id: number): Observable<{}> {
    this.loaderService.show();

    return this.deleteWorkout(id).pipe(
      switchMap(() => this.getWorkouts()),
      tap((workouts) => this.omWorkoutsReceive(workouts)),
      finalize(() => this.loaderService.hide())
    );
  }

  private getWorkouts(): Observable<Workout[]> {
    return this.workoutsApiService.getWorkouts();
  }

  private deleteWorkout(id: number): Observable<{}> {
    return this.workoutsApiService.deleteWorkout(id);
  }

  private omWorkoutsReceive(workouts: Workout[]) {
    this.workoutsSubject.next(workouts);
  }
}
