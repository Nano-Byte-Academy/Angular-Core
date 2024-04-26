import { TestBed } from '@angular/core/testing';

import { MyPostsServiceService } from './my-posts-service.service';

describe('MyPostsServiceService', () => {
  let service: MyPostsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyPostsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
