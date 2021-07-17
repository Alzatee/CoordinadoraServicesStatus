import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemsOperationalComponent } from './systems-operational.component';

describe('SystemsOperationalComponent', () => {
  let component: SystemsOperationalComponent;
  let fixture: ComponentFixture<SystemsOperationalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemsOperationalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemsOperationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
