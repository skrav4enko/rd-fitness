import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Meal } from 'src/app/core/models/meal.model';
import { MealsApiService } from 'src/app/core/services/meals-api.service';
import { LoaderService } from '../../../core/services/loader.service';
import { catchError, take, tap } from 'rxjs/operators';

@Injectable()
export class MealsService {
  mealsSubject = new BehaviorSubject<Meal[]>([]);
  meals$ = this.mealsSubject.asObservable();

  constructor(private mealsApiService: MealsApiService, private loaderService: LoaderService) {}

  getMeals(): Observable<Meal[]> {
    this.loaderService.show();
    return this.mealsApiService.getMeals().pipe(
      tap((meals: Meal[]) => this.mealsSubject.next(meals)),
      tap(() => this.loaderService.hide()),
      catchError((err) => {
        this.loaderService.hide();
        return of(err)
      })
    );
  }

  deleteMeal(id: number): Observable<{}> {
    return this.mealsApiService.deleteMeal(id);
  }
}
