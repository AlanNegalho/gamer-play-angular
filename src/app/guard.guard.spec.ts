import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GuardGuard } from './guard.guard';

describe('guardGuard', () => {
  let guard: GuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [GuardGuard]
    });

    guard = TestBed.inject(GuardGuard);
  });

  const executeGuard: CanActivateFn = (route, state) => guard.canActivate(route, state);

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
