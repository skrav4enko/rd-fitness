import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from './containers/meals/meals.component';
import { MealComponent } from './containers/meal/meal.component';
import { LoginGuard } from '../../core/guards/login.guard';
import { DataGuard } from './resolvers/data.guard';

const routes: Routes = [
  {
    path: '',
    component: MealsComponent,
    // canActivate: [ LoginGuard ],
    resolve: {
      preloadedString: DataGuard
    }
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
