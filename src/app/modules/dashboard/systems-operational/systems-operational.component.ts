import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { UtilService } from '@shared/util/util.service';
import { ServiceStatusService } from 'app/app-core/core/services/service-status.service';
import { interval } from 'rxjs';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
  selector: 'coordinadora-systems-operational',
  templateUrl: './systems-operational.component.html',
  styleUrls: ['./systems-operational.component.scss']
})
export class SystemsOperationalComponent implements OnInit {
  public titleAllsystems = 'All systems operational';
  public lastUpdatedDate: string = '';
  public servicesStatus: any[] = [];
  public serviceStatus: any[] = [];
  public serviceStatusDays: any[] = [];
  public lastMonthPercentage: any;
  public yellowAlertPercentageGreaterThan = environment.yellow_alert_percentage_greater_than;
  public aquaAlertPercentageGreaterThan = environment.aqua_alert_percentage_greater_than;

  constructor(
    private serviceStatusService: ServiceStatusService,
    private utilService: UtilService
  ) { }

  ngOnInit(): void {
    this.getServicesStatus();
    //Refrescar serivio a los x minutos de iniciar el primer consumo.
    interval(environment.interval_to_refresh_service_in_minutes * 60 * 1000).subscribe(x => this.getServicesStatus());
  }

  getServicesStatus(): void {
    this.serviceStatusService.getServicesStatus()
      .subscribe((result: any) => {
        this.lastUpdatedDate = result.last_updated;
        this.servicesStatus = result.status.apis;
        this.getServiceStatus();
      }, (error: HttpErrorResponse) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: error.name,
          text: error.message
        })
      });
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
    this.getOfTheMonth();
  }

  getOfTheMonth(): void {
    this.lastMonthPercentage = this.utilService.getPercentagesByDays(this.serviceStatusDays, 30);
    // console.log('este', this.lastMonthPercentage);
  }

}
