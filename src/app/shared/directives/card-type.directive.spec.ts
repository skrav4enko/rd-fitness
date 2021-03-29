import { CardTypeDirective } from './card-type.directive';
import { Component, NO_ERRORS_SCHEMA, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: '<img appCardType/>'
})
class TestComponent {
  @ViewChild(CardTypeDirective) directive: CardTypeDirective
}

describe('CardTypeDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeDirective, TestComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new CardTypeDirective();
    expect(directive).toBeTruthy();
  });

  it('should be VISA img displayed', () => {
    component.directive.cardNumber = '1';
    fixture.detectChanges();

    const imgEl = fixture.debugElement.query(By.directive(CardTypeDirective));

    expect(imgEl.properties.src).toBe(`assets/card-types/visa.png`);
  })
});
