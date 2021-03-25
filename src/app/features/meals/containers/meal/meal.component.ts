import {
  AfterContentChecked, AfterContentInit,
  AfterViewInit, ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../../service/meals.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterContentChecked  {
  meal: Meal;
  id: number;

  constructor(
    private mealsService: MealsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('[Meal Component] onInit')
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.mealsService
        .getMealById(this.id)
        .pipe(tap((meal) => (this.meal = meal)))
        .subscribe();
    }
  }

  ngOnDestroy() {
    console.log('[Meal Component] onDestroy')
  }

  ngAfterContentChecked(): void {
    console.log('[Meal Component] ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('[Meal Component] ngAfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log('[Meal Component] ngAfterViewInit')
  }

  ngDoCheck(): void {
    console.log('[Meal Component] ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Meal Component] ngOnChanges', changes)
  }

  createMeal(meal: Meal): void {
    this.mealsService.createMealHandler(meal).subscribe();
  }

  updateMeal(meal: Meal): void {
    this.mealsService.updateMealById(meal).subscribe();
  }
}
