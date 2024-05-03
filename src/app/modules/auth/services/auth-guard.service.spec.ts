import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuardService } from './auth-guard.service';
import { LoginLayoutComponent } from '../components/login-layout/login-layout.component';

describe('AuthGuardService', () => {
  let service: AuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([{ path: 'login', component: LoginLayoutComponent }])
      ]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not allow unauthorized users', () => {
    // Ensure that we remove all the data related to "auth" users
    sessionStorage.removeItem('auth');
    const allowed = service.canActivate();
    expect(allowed).toBeFalse();
  });

  it('should allow authorized users', () => {
    // Ensure that we add data related to an "auth" user
    sessionStorage.setItem('auth', JSON.stringify('any value here'));
    const allowed = service.canActivate();
    expect(allowed).toBeTrue();
  });
});
