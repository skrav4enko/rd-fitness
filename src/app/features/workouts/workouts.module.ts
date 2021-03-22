import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutsComponent } from './containers/workouts/workouts.component';
import { WorkoutsRoutingModule } from './workouts-routing.module';
import { WorkoutComponent } from './containers/workout/workout.component';
import { WorkoutsService } from './services/workouts.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkoutFormComponent } from './components/workout-form/workout-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WorkoutsComponent, WorkoutComponent, WorkoutFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    WorkoutsRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}
