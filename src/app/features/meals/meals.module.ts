import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsComponent } from './containers/meals/meals.component';
import { MealsRoutingModule } from './meals-routing.module';
import { MealComponent } from './containers/meal/meal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MealsService } from './service/meals.service';
import { MealFormComponent } from './components/meal-form/meal-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MealsComponent, MealComponent, MealFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MealsRoutingModule,
  ],
  providers: [MealsService],
})
export class MealsModule {}
