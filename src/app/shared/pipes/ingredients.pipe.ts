import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients',
})
export class IngredientsPipe implements PipeTransform {
  transform(value: string[], ...args: unknown[]): unknown {
    const uppercaseValue = value.map((ingredient: string) =>
      ingredient.toUpperCase()
    );
    return uppercaseValue.join(', ');
  }
}
