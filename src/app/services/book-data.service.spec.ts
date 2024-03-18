import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookDataService } from './book-data.service';

describe('BookDataService', () => {
  let service: BookDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BookDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
