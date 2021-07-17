import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeLastDaysComponent } from './uptime-last-days.component';

describe('UptimeLastDaysComponent', () => {
  let component: UptimeLastDaysComponent;
  let fixture: ComponentFixture<UptimeLastDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptimeLastDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UptimeLastDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
