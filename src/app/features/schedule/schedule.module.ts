import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';



@NgModule({
  declarations: [ScheduleComponent, ScheduleItemComponent],
  imports: [
    CommonModule,
    ScheduleRoutingModule
  ]
})
export class ScheduleModule { }
