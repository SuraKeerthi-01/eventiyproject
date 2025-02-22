import { TestBed } from '@angular/core/testing';

import { UpdatesuspendService } from './updatesuspend.service';

describe('UpdatesuspendService', () => {
  let service: UpdatesuspendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatesuspendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
