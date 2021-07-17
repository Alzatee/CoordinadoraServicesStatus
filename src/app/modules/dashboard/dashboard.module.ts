import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UptimeLastDaysComponent } from './uptime-last-days/uptime-last-days.component';
import { OverallUptimeComponent } from './overall-uptime/overall-uptime.component';
import { SystemsOperationalComponent } from './systems-operational/systems-operational.component';

@NgModule({
  declarations: [
    UptimeLastDaysComponent,
    OverallUptimeComponent,
    SystemsOperationalComponent
  ],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
