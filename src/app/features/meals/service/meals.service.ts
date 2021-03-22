import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsApiService } from 'src/app/core/services/meals-api.service';
import { LoaderService } from '../../../core/services/loader.service';

@Injectable()
export class MealsService {
  private mealsSubject = new BehaviorSubject<Meal[]>([]);
  meals$ = this.mealsSubject.asObservable();

  constructor(
    private mealsApiService: MealsApiService,
    private loaderService: LoaderService
  ) {}

  loadMeals(): Observable<Meal[]> {
    this.loaderService.show();
    return this.getMeals().pipe(
      tap((meals: Meal[]) => this.onMealsReceive(meals)),
      finalize(() => this.loaderService.hide())
    );
  }

  deleteMealById(id: number): Observable<{}> {
    this.loaderService.show();

    return this.deleteMeal(id).pipe(
      switchMap(() => this.getMeals()),
      tap((meals) => this.onMealsReceive(meals)),
      finalize(() => this.loaderService.hide())
    );
  }

  private getMeals(): Observable<Meal[]> {
    return this.mealsApiService.getMeals();
  }

  private deleteMeal(id: number): Observable<{}> {
    return this.mealsApiService.deleteMeal(id);
  }

  private onMealsReceive(meals: Meal[]) {
    this.mealsSubject.next(meals);
  }
}
