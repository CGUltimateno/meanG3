import { TestBed } from '@angular/core/testing';

import { TvServices } from './tvservices';

describe('MoviesService', () => {
  let service: TvServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
