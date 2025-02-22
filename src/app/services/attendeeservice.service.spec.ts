import { TestBed } from '@angular/core/testing';

import { AttendeeserviceService } from './attendeeservice.service';

describe('AttendeeserviceService', () => {
  let service: AttendeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
