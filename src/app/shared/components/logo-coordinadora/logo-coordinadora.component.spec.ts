import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCoordinadoraComponent } from './logo-coordinadora.component';

describe('LogoCoordinadoraComponent', () => {
  let component: LogoCoordinadoraComponent;
  let fixture: ComponentFixture<LogoCoordinadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCoordinadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCoordinadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
