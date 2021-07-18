import { Component, Input, OnInit } from '@angular/core';
import { UtilService } from '@shared/util/util.service'

@Component({
  selector: 'coordinadora-overall-uptime',
  templateUrl: './overall-uptime.component.html',
  styleUrls: ['./overall-uptime.component.scss']
})
export class OverallUptimeComponent implements OnInit {
  @Input() servicesStatus: any[] = [];
  public title = 'Overall uptime';
  public serviceStatus: any[] = [];
  public serviceStatusDays: any[] = [];
  public lastDayPercentage: any;
  public lasteWeekPercentage: any;
  public lasteMonthPercentage: any;

  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.getServiceStatus();
  }

  getServiceStatus(): void {
    this.servicesStatus.forEach(element => {
      //Para que sea dinámico sin importar cuantos estados o servicios reciba (omite el nombre key que varía) y obtiene la data de cada servicio.
      this.serviceStatus.push(Object.values(element)[0]);
    });
    this.getAllServiceStatusDays();
  }

  getAllServiceStatusDays(): void {
    //obtiene los 30 días de todos los servicios
    this.serviceStatus.forEach(element => {
      this.serviceStatusDays.push(Object.values(element)[2]);
    });
    this.getOfTheDay();
    this.getOfTheWeek();
    this.getOfTheMonth();
  }

  getOfTheDay(): void {
    this.lastDayPercentage = this.utilService.getPercentagesByDays(this.serviceStatusDays, 1);
    // console.log(this.lastDayPercentage);
  }

  getOfTheWeek(): void {
    this.lasteWeekPercentage = this.utilService.getPercentagesByDays(this.serviceStatusDays, 7);
    // console.log(this.lasteWeekPercentage);
  }

  getOfTheMonth(): void {
    this.lasteMonthPercentage = this.utilService.getPercentagesByDays(this.serviceStatusDays, 30);
    // console.log(this.lasteMonthPercentage);
  }


}
