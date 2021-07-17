import { Component, Input, OnInit } from '@angular/core';
import { environment } from '@env/environment'

@Component({
  selector: 'coordinadora-uptime-last-days',
  templateUrl: './uptime-last-days.component.html',
  styleUrls: ['./uptime-last-days.component.scss']
})
export class UptimeLastDaysComponent implements OnInit {
  public title = '<strong>UPDATE</strong> Last 30 days';
  public yellowAlertPercentageGreaterThan = environment.yellow_alert_percentage_greater_than;
  public aquaAlertPercentageGreaterThan = environment.aqua_alert_percentage_greater_than;
  @Input() servicesStatus: any[] = [];
  public serviceStatus: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getServiceStatus();
  }

  getServiceStatus(): void {
    this.servicesStatus.forEach(element => {
      //Para que sea dinámico sin importar cuantos estados o servicios reciba (omite el nombre key que varía) y obtiene la data de cada servicio.
      this.serviceStatus.push(Object.values(element)[0]);
    });
    // console.log('qui', this.serviceStatus); 
  }

}
