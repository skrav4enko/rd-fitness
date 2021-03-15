import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { delay, filter, map, switchMap, tap } from 'rxjs/operators';

import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../../service/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy {
  meals: Meal[] = [];

  // sub: Subscription;

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.mealsService.getMeals().subscribe((data) => (this.meals = data));

    // this.sub = fromEvent(document.body, 'click')
    //   .pipe(
    //     map((e: MouseEvent) => e.clientX),
    //     filter((x) => x % 2 === 0)
    //   )
    //   .subscribe((x) => console.log('rxjs event', x));

    // document.body.addEventListener('click', (event) => {
    //   console.log('native event');
    // });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  handleDelete(id: number): void {
    this.mealsService
      .deleteMeal(id)
      .pipe(
        switchMap(() => this.mealsService.getMeals()),
        tap((data) => (this.meals = data))
      )
      .subscribe();
  }
}
