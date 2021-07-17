import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceStatusService } from 'app/app-core/core/services/service-status.service';
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

  constructor(private serviceStatusService: ServiceStatusService) { }

  ngOnInit(): void {
    this.getServicesStatus();
  }

  getServicesStatus(): void {
    this.serviceStatusService.getServicesStatus()
    .subscribe((result: any) => {
      this.lastUpdatedDate = result.last_updated;
      this.servicesStatus = result.status.apis;
      
    }, (error: HttpErrorResponse) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: error.name,
        text: error.message
      })
    });
  }

}
