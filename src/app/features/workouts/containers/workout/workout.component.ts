import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Workout } from 'src/app/core/models/workout.model';
import { WorkoutsService } from '../../services/workouts.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss'],
})
export class WorkoutComponent implements OnInit {
  id: number;
  workout: Workout;

  constructor(
    private workoutsService: WorkoutsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.workoutsService
        .getWorkoutById(this.id)
        .pipe(tap((workout) => (this.workout = workout)))
        .subscribe();
    }
    console.log(this.id);
  }

  editHandler(workout: Workout): void {
    this.workoutsService.editWorkout(workout).subscribe();
  }

  addHandler(workout: Workout): void {
    this.workoutsService.addWorkout(workout).subscribe();
  }
}
