import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Meal } from 'src/app/core/models/meal.model';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
})
export class MealFormComponent implements OnInit {
  @Input() set meal(meal: Meal) {
    if (meal && meal.name) {
      this.id = meal.id;
      this.exists = true;
      this.ingredients.clear();

      this.mealForm.patchValue(meal);

      if (meal.ingredients) {
        for (const item of meal.ingredients) {
          this.ingredients.push(new FormControl(item, [Validators.required]));
        }
      }
    }
  }

  @Output() create = new EventEmitter<Meal>();
  @Output() update = new EventEmitter<Meal>();

  mealForm = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([new FormControl('', [Validators.required])]),
  });

  exists = false;

  private id: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  createMeal(): void {
    if (this.mealForm.valid) {
      this.create.emit(this.mealForm.value);
    }
  }

  updateMeal(): void {
    if (this.mealForm.valid) {
      this.update.emit({ ...this.mealForm.value, id: this.id });
    }
  }

  addIngredient(): void {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  get ingredients(): FormArray {
    return this.mealForm.get('ingredients') as FormArray;
  }

  get required(): boolean {
    return (
      this.mealForm.get('name').hasError('required') &&
      this.mealForm.get('name').touched
    );
  }
}
