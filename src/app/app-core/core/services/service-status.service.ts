import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { ServiceStatusModelI } from '@core/models/objects/services-status'

@Injectable({
  providedIn: 'root'
})
export class ServiceStatusService {
  apiUrl: string = environment.API_URL;

  constructor(private http: HttpClient) { }

  getServicesStatus(): any {
    return this.http.get<ServiceStatusModelI>(`${this.apiUrl}/status`);
  }

}
