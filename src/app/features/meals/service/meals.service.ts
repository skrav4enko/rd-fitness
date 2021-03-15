import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Meal } from 'src/app/core/models/meal.model';
import { MealsApiService } from 'src/app/core/services/meals-api.service';

@Injectable()
export class MealsService {
  constructor(private mealsApiService: MealsApiService) {}

  getMeals(): Observable<Meal[]> {
    return this.mealsApiService.getMeals();
  }

  deleteMeal(id: number): Observable<{}> {
    return this.mealsApiService.deleteMeal(id);
  }
}
