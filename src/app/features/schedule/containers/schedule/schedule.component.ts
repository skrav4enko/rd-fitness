import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScheduleComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterContentChecked, AfterViewChecked {
  @ViewChild('input') schedule: ElementRef;
  itemType = {
    label: 'hello',
  }

  constructor() {
    console.log('[Schedule Parent Component] constructor')
  }

  ngOnInit(): void {
    console.log('[Schedule Parent Component] OnInit')
    console.log('setTimeout', setTimeout)
      this.itemType = { ...this.itemType, label: 'bye!' };
  }

  ngOnDestroy() {
    console.log('[Schedule Parent Component] onDestroy')
  }

  ngAfterContentChecked(): void {
    console.log('[Schedule Parent Component] ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log('[Schedule Parent Component] ngAfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log(this.schedule);
    console.log('[Schedule Parent Component] ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('[Schedule Parent Component] ngAfterViewChecked')
  }

  ngDoCheck(): void {
    console.log('[Schedule Parent Component] ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Schedule Parent Component] ngOnChanges', changes)
  }

}
