import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Workout } from 'src/app/core/models/workout.model';
import { WorkoutsApiService } from 'src/app/core/services/workouts-api.service';

@Injectable()
export class WorkoutsService {
  constructor(private workoutsApiService: WorkoutsApiService) {}

  getWorkouts(): Observable<Workout[]> {
    return this.workoutsApiService.getWorkouts();
  }

  deleteWorkout(id: number): Observable<{}> {
    return this.workoutsApiService.deleteWorkout(id);
  }
}
