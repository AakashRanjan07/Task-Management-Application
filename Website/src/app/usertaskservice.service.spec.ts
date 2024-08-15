import { TestBed } from '@angular/core/testing';

import { UsertaskserviceService } from './service/usertaskservice.service';

describe('UsertaskserviceService', () => {
  let service: UsertaskserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsertaskserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
