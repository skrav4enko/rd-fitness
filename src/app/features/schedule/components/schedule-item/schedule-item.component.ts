import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterViewInit, AfterContentChecked, AfterContentInit, AfterContentChecked, AfterViewChecked {
  @Input() type: any;
  @ContentChild('h3') header: any;

  constructor(private cd: ChangeDetectorRef) {
    console.log('[Schedule Item Component] constructor')
  }

  sayHello() {
    console.log("HELLO!");
  }

  ngOnInit(): void {
    this.cd.detach();
    console.log('[Schedule Item Component] OnInit')
  }

  ngOnDestroy() {
    console.log('[Schedule Item Component] onDestroy')
  }

  ngAfterContentChecked(): void {
    console.log('[Schedule Item Component] ngAfterContentChecked')
  }

  ngAfterContentInit(): void {
    console.log(this.header);
    console.log('[Schedule Item Component] ngAfterContentInit')
  }

  ngAfterViewInit(): void {
    console.log('[Schedule Item Component] ngAfterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('[Schedule Item Component] ngAfterViewChecked')
  }

  ngDoCheck(): void {
    console.log('[Schedule Item Component] ngDoCheck')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('[Schedule Item Component] ngOnChanges', changes)
  }

}
