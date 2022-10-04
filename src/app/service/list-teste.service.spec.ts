import { TestBed } from '@angular/core/testing';

import { ListTesteService } from './list-teste.service';

describe('ListTesteService', () => {
  let service: ListTesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTesteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
