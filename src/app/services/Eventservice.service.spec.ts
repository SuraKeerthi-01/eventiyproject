import { TestBed } from '@angular/core/testing';

import { EventServiceService } from './Eventservice.service';

describe('ServiceService', () => {
  let service: EventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
