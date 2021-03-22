import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';
import { takeUntil, tap } from 'rxjs/operators';
import { Workout } from 'src/app/core/models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit, OnDestroy {
  workouts: Workout[] = [];

  searchControl = new FormControl('');

  private destroyed$ = new Subject<void>();

  constructor(
    private workoutsService: WorkoutsService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.workoutsService.loadWorkouts().subscribe();
    this.workoutsService.workouts$
      .pipe(
        tap((meals) => (this.workouts = meals)),
        takeUntil(this.destroyed$)
      )
      .subscribe();

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((value) => this.httpClient.get(`workouts?name_like=${value}`))
      )
      .subscribe((workouts) => console.log(workouts));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  handleEdit(id: number): void {
    this.router.navigate(['/workouts', id]);
  }

  handleDelete(id: number): void {
    this.workoutsService.deleteWorkoutById(id).subscribe();
  }
}
