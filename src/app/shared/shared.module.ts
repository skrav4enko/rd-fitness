import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { IngredientsPipe } from './pipes/ingredients.pipe';
import { CardTypeDirective } from './directives/card-type.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [ListItemComponent, IngredientsPipe, CardTypeDirective, LoaderComponent],
  exports: [ ListItemComponent, IngredientsPipe, CardTypeDirective, LoaderComponent ],
  imports: [CommonModule],
})
export class SharedModule {}
