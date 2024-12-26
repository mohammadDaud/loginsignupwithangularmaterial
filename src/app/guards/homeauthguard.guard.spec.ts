import { TestBed } from '@angular/core/testing';

import { HomeauthguardGuard } from './homeauthguard.guard';

describe('HomeauthguardGuard', () => {
  let guard: HomeauthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomeauthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
