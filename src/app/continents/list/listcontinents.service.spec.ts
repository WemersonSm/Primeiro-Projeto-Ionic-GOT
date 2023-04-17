import { TestBed } from '@angular/core/testing';

import { ListcontinentsService } from './listcontinents.service';

describe('ListcontinentsService', () => {
  let service: ListcontinentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListcontinentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
