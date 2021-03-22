import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { IngredientsPipe } from './pipes/ingredients.pipe';
import { CardTypeDirective } from './directives/card-type.directive';
import { LoaderComponent } from './components/loader/loader.component';
import { WorkoutsPipe } from './pipes/workouts.pipe';

@NgModule({
  declarations: [
    ListItemComponent,
    IngredientsPipe,
    CardTypeDirective,
    LoaderComponent,
    WorkoutsPipe,
  ],
  exports: [
    ListItemComponent,
    IngredientsPipe,
    CardTypeDirective,
    LoaderComponent,
    WorkoutsPipe,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
