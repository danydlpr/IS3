import { TestBed, async, inject } from '@angular/core/testing';

import { RolAdviserGuard } from './rol-adviser.guard';

describe('RolAdviserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RolAdviserGuard]
    });
  });

  it('should ...', inject([RolAdviserGuard], (guard: RolAdviserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
