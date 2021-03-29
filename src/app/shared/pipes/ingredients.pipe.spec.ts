import { IngredientsPipe } from './ingredients.pipe';

describe('IngredientsPipe', () => {

  it('create an instance', () => {
    const pipe = new IngredientsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should join array', () => {
    const pipe = new IngredientsPipe();

    const result = pipe.transform(['1', '2', '3']);

    expect(result).toBe('1, 2, 3');
  })

});
