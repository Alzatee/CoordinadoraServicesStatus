import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'coordinadora-overall-uptime',
  templateUrl: './overall-uptime.component.html',
  styleUrls: ['./overall-uptime.component.scss']
})
export class OverallUptimeComponent implements OnInit {
  @Input() servicesStatus: any[] = [];
  public percentageOfTheDay: any;
  public percentageOfTheWeek: any;
  public percentageOfTheMonth: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.servicesStatus);
  }

}
