import { Component } from '@angular/core';
import { environment } from '@env/environment';

@Component({
  selector: 'coordinadora-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  environmentName = environment.environment;
}
