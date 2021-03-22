import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
    private loaderService: LoaderService,
    private router: Router
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

  createMealHandler(meal: Meal): Observable<Meal> {
    this.loaderService.show();

    return this.mealsApiService.createMeal(meal).pipe(
      tap(() => this.router.navigate(['/meals'])),
      finalize(() => this.loaderService.hide())
    );
  }

  updateMealById(meal: Meal): Observable<Meal> {
    this.loaderService.show();

    return this.mealsApiService.updateMeal(meal).pipe(
      tap(() => this.router.navigate(['/meals'])),
      finalize(() => this.loaderService.hide())
    );
  }

  getMealById(id: number): Observable<Meal> {
    this.loaderService.show();

    return this.mealsApiService
      .getMeal(id)
      .pipe(tap(() => this.loaderService.hide()));
  }

  private getMeals(): Observable<Meal[]> {
    return this.mealsApiService.getMeals();
  }

  private deleteMeal(id: number): Observable<{}> {
    return this.mealsApiService.deleteMeal(id);
  }

  private onMealsReceive(meals: Meal[]): void {
    this.mealsSubject.next(meals);
  }
}
