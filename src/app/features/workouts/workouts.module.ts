import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutComponent } from './containers/workout/workout.component';



@NgModule({
  declarations: [WorkoutsComponent, WorkoutComponent],
  imports: [
    CommonModule,
    WorkoutsRoutingModule
  ]
})
export class WorkoutsModule { }
