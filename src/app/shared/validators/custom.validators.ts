import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  static range(control: AbstractControl): ValidationErrors | null {
    if (
      control.value !== undefined &&
      (isNaN(control.value) || control.value < 1 || control.value > 200)
    ) {
      return {
        range: true,
      };
    }

    return null;
  }

  static rangeParams(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (
        control.value !== undefined &&
        (isNaN(control.value) || control.value < min || control.value > max)
      ) {
        return {
          rangeParams: true,
        };
      }

      return null;
    };
  }
}
