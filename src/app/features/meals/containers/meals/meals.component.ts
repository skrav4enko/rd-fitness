import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pipe, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Meal } from 'src/app/core/models/meal.model';
import { MealsService } from '../../service/meals.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss'],
})
export class MealsComponent implements OnInit, OnDestroy {
  meals: Meal[];

  private destroyed$ = new Subject<void>();

  constructor(private mealsService: MealsService, private router: Router) {}

  ngOnInit(): void {
    this.mealsService.loadMeals().subscribe();
    this.mealsService.meals$
      .pipe(
        tap((meals) => (this.meals = meals)),
        takeUntil(this.destroyed$)
      )
      .subscribe();


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
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  handleEdit(id: number): void {
    this.router.navigate([`meals/${id}`]);
  }

  handleDelete(id: number): void {
    this.mealsService.deleteMealById(id).subscribe();
  }
}
