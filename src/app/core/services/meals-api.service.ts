import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Meal } from '../models/meal.model';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class MealsApiService {
  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`${BASE_URL}/meals`);
  }

  deleteMeal(id: number): Observable<{}> {
    return this.http.delete<{}>(`${BASE_URL}/meals/${id}`);
  }
}
