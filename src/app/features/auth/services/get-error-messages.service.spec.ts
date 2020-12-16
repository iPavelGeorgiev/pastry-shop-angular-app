import { TestBed } from '@angular/core/testing';

import { GetErrorMessagesService } from './get-error-messages.service';

describe('GetErrorMessagesService', () => {
  let service: GetErrorMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetErrorMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
