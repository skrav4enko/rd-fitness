import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsApiService {
  constructor(private httpClient: HttpClient) {}

  getWorkouts(): Observable<Workout[]> {
    return this.httpClient.get<Workout[]>(`workouts`);
  }

  deleteWorkout(id: number): Observable<{}> {
    return this.httpClient.delete<{}>(`workouts/${id}`);
  }
}
