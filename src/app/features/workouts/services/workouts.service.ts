import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private loaderService: LoaderService,
    private router: Router
  ) {}

  loadWorkouts(): Observable<Workout[]> {
    this.loaderService.show();

    return this.getWorkouts().pipe(
      tap((workouts) => this.onWorkoutsReceive(workouts)),
      finalize(() => this.loaderService.hide())
    );
  }

  getWorkoutById(id: number): Observable<Workout> {
    this.loaderService.show();

    return this.workoutsApiService
      .getWorkout(id)
      .pipe(finalize(() => this.loaderService.hide()));
  }

  addWorkout(workout: Workout): Observable<Workout> {
    this.loaderService.show();

    return this.workoutsApiService.addWorkout(workout).pipe(
      finalize(() => this.loaderService.hide()),
      tap(() => this.router.navigate(['/workouts']))
    );
  }

  editWorkout(workout: Workout): Observable<Workout> {
    this.loaderService.show();

    return this.workoutsApiService.editWorkout(workout).pipe(
      finalize(() => this.loaderService.hide()),
      tap(() => this.router.navigate(['/workouts']))
    );
  }

  deleteWorkoutById(id: number): Observable<{}> {
    this.loaderService.show();

    return this.deleteWorkout(id).pipe(
      switchMap(() => this.getWorkouts()),
      tap((workouts) => this.onWorkoutsReceive(workouts)),
      finalize(() => this.loaderService.hide())
    );
  }

  private getWorkouts(): Observable<Workout[]> {
    return this.workoutsApiService.getWorkouts();
  }

  private deleteWorkout(id: number): Observable<{}> {
    return this.workoutsApiService.deleteWorkout(id);
  }

  private onWorkoutsReceive(workouts: Workout[]): void {
    this.workoutsSubject.next(workouts);
  }
}
