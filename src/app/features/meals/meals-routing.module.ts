import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';

const routes: Routes = [
  {
    path: '',
    component: MealsComponent,
  },
  {
    path: 'add',
    component: MealComponent,
  },
  {
    path: ':id',
    component: MealComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MealsRoutingModule {}
