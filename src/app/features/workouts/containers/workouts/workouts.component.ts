import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { Workout } from 'src/app/core/models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit, OnDestroy {
  workouts: Workout[] = [];

  private destroyed$ = new Subject<void>();

  constructor(private workoutsService: WorkoutsService) {}

  ngOnInit(): void {
    this.workoutsService.loadWorkouts().subscribe();
    this.workoutsService.workouts$
      .pipe(
        tap((meals) => (this.workouts = meals)),
        takeUntil(this.destroyed$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  handleDelete(id: number): void {
    this.workoutsService.deleteWorkoutById(id).subscribe();
  }
}
