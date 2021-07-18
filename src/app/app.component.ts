import { Component } from '@angular/core';
import { ModalLoadServicesService } from '@core/services/modal-load-services/modal-load-services.service';

@Component({
  selector: 'coordinadora-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public modalLoadServicesService: ModalLoadServicesService) { }
  
}
