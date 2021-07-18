import { TestBed } from '@angular/core/testing';

import { ServiceStatusService } from './service-status.service';
import { HttpClientModule } from '@angular/common/http';

describe('ServiceStatusService', () => {
  let service: ServiceStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ServiceStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
