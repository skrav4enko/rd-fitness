import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { delay, filter, map, switchMap, take, takeUntil, takeWhile, tap } from 'rxjs/operators';

import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../../service/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy {
  meals$: Observable<Meal[]> = this.mealsService.meals$;

  // sub: Subscription;
  isAlive = true;

  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.mealsService.getMeals().pipe(
      take(1)
    ).subscribe();

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
    this.isAlive = false;
  }

  handleDelete(id: number): void {
    this.mealsService
      .deleteMeal(id)
      .pipe(
        switchMap(() => this.mealsService.getMeals()),
      )
      .subscribe();
  }
}
