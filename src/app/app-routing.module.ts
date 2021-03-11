import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './app.constans';

const routes: Routes = [
  {
    path: APP_ROUTES.schedule,
    loadChildren: () => import('./features/schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: APP_ROUTES.workouts,
    loadChildren: () => import('./features/workouts/workouts.module').then(m => m.WorkoutsModule)
  },
  {
    path: APP_ROUTES.meals,
    loadChildren: () => import('./features/meals/meals.module').then(m => m.MealsModule)
  },
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
