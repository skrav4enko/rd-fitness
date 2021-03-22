import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../../service/meals.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
})
export class MealComponent implements OnInit {
  meal: Meal;
  id: number;

  constructor(
    private mealsService: MealsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.mealsService
        .getMealById(this.id)
        .pipe(tap((meal) => (this.meal = meal)))
        .subscribe();
    }
  }

  createMeal(meal: Meal): void {
    this.mealsService.createMealHandler(meal).subscribe();
  }

  updateMeal(meal: Meal): void {
    this.mealsService.updateMealById(meal).subscribe();
  }
}
