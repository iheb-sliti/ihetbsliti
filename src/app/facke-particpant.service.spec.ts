import { TestBed } from '@angular/core/testing';

import { FackeParticpantService } from './facke-particpant.service';

describe('FackeParticpantService', () => {
  let service: FackeParticpantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FackeParticpantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
