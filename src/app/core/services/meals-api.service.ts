import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Meal } from '../models/meal.model';

@Injectable({
  providedIn: 'root',
})
export class MealsApiService {
  constructor(private http: HttpClient) {}

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(`meals`, {
      params: {},
    });
  }

  deleteMeal(id: number): Observable<{}> {
    return this.http.delete<{}>(`meals/${id}`);
  }

  getMeal(id: number): Observable<Meal> {
    return this.http.get<Meal>(`meals/${id}`);
  }

  createMeal(meal: Meal): Observable<Meal> {
    return this.http.post<Meal>(`meals/`, meal);
  }

  updateMeal(meal: Meal): Observable<Meal> {
    return this.http.put<Meal>(`meals/${meal.id}`, meal);
  }
}
