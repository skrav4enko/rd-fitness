import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Workout } from 'src/app/core/models/workout.model';
import { CustomValidators } from 'src/app/shared/validators/custom.validators';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent implements OnInit {
  @Input()
  set workout(workout: Workout) {
    if (workout && workout.id) {
      this.id = workout.id;
      this.isEdit = true;
      this.workoutForm.patchValue(workout);
    }
  }

  @Output() add = new EventEmitter<Workout>();
  @Output() edit = new EventEmitter<Workout>();

  workoutForm = this.fb.group({
    name: ['', Validators.required],
    type: 'strength',
    strength: this.fb.group({
      reps: '1',
      sets: ['1', CustomValidators.rangeParams(1, 10)],
      weight: ['1', CustomValidators.range],
    }),
    endurance: this.fb.group({
      duration: '1',
      distance: '1',
    }),
  });

  get placeholder(): string {
    return `e.g. ${
      this.workoutForm.get('type').value === 'strength'
        ? 'Benchpress'
        : 'Treadmill'
    }`;
  }

  get strength(): FormGroup {
    return this.workoutForm.get('strength') as FormGroup;
  }

  get isStrengthVisible(): boolean {
    return this.workoutForm.get('type').value === 'strength';
  }

  get isEnduranceVisible(): boolean {
    return this.workoutForm.get('type').value === 'endurance';
  }

  get isWeightRangeInvalid(): boolean {
    const weight = this.strength.get('weight');

    return weight.hasError('range') && weight.touched;
  }

  get isSetsRangeInvalid(): boolean {
    const sets = this.strength.get('sets');

    return sets.hasError('range') && sets.touched;
  }

  isEdit: boolean;
  private id: number;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onEdit(): void {
    if (this.workoutForm.valid) {
      this.edit.emit({ ...this.workoutForm.value, id: this.id });
    }
  }

  onAdd(): void {
    if (this.workoutForm.valid) {
      this.add.emit(this.workoutForm.value);
    }
  }
}
