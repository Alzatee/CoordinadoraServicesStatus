import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallUptimeComponent } from './overall-uptime.component';

describe('OverallUptimeComponent', () => {
  let component: OverallUptimeComponent;
  let fixture: ComponentFixture<OverallUptimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallUptimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallUptimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
