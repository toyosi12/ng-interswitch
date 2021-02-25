import { TestBed } from '@angular/core/testing';

import { NgInterswitchService } from './ng-interswitch.service';

describe('NgInterswitchService', () => {
  let service: NgInterswitchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgInterswitchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
