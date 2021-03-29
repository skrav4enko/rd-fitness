import { ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { MealsComponent } from './meals.component';
import { MealsService } from '../../service/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ListItemComponent } from '../../../../shared/components/list-item/list-item.component';
import { Meal } from '../../../../core/models/meal.model';
import { By } from '@angular/platform-browser';


class MealsServiceStub {
  meals$ = of([ 'test' ]);

  loadMeals() {
    return of({});
  }

  getMeals() {
    return of({});
  }

}

class ActivatedRouteStub {
  snapshot = {
    data: 'test',
  }
}

describe('MealsComponent', () => {
  let component: MealsComponent;
  let fixture: ComponentFixture<MealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsComponent ],
      providers: [
        { provide: MealsService, useClass: MealsServiceStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
      ],
      imports: [
        RouterTestingModule,
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call loadMeals', inject([ MealsService ], (mealsService: MealsService) => {
      const loadMeals = spyOn(mealsService, 'loadMeals').and.returnValue(of([] as Meal[]));

      component.ngOnInit();

      expect(loadMeals).toHaveBeenCalled();
    }));

    it('should call loadMeals', inject([ MealsService ], (mealsService: MealsService) => {
      const loadMeals = spyOn(mealsService, 'loadMeals').and.returnValue(of([] as Meal[]));
      component.meals = null;

      component.ngOnInit();

      expect(component.meals).toEqual([ 'test' ] as any);
    }));
  });

  describe('handleDelete', () => {
    it('should navigate to edit page', inject([ Router ], (router: Router) => {
      spyOn(router, 'navigate');

      component.handleEdit(1);

      expect(router.navigate).toHaveBeenCalledWith([`meals/1`]);
    }));
  });

  it('should emit edit click', () => {
    const button = fixture.debugElement.query(By.css('.button'));
    spyOn(component, 'handleEdit');

    button.triggerEventHandler('click', null);

    expect(component.handleEdit).toHaveBeenCalled();
  })
});
