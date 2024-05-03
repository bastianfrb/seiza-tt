import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { AuthService } from './auth.service';
import { LoginLayoutComponent } from '../components/login-layout/login-layout.component';
import { ApiService } from '../../core/services/api/api.service';
import { HomeComponent } from '../../home/components/home/home.component';
import { USER_MOCK } from '../../core/tests/mocks';

describe('AuthService', () => {
  let service: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([
          { path: 'login', component: LoginLayoutComponent },
          { path: 'home', component: HomeComponent }
        ]),
        BrowserAnimationsModule
      ],
      providers: [ApiService]
    });

    service = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Authorize', () => {
    it('should return unauthorized user', () => {
      // Ensure that we remove all the data related to "auth" users
      sessionStorage.removeItem('auth');
      const authorized = service.isAuthorized();
      expect(authorized).toBeFalse();
    });
  
    it('should return authorized user', () => {
      // Ensure that we add data related to an "auth" user
      sessionStorage.setItem('auth', JSON.stringify('any value here'));
      const authorized = service.isAuthorized();
      expect(authorized).toBeTrue();
    });
  });

  describe('Authentication', () => {
    // Do tests with user "1-9"
    const url = 'http://localhost:8080';

    let httpMock: HttpTestingController;

    beforeEach(() => {
      httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });

    it('should handle next and complete after call login', () => {
      service.doLogin({ username: '1-9', password: '123' });
      const req = httpMock.expectOne(`${url}/cliente/1-9`);
      expect(req.request.method).toBe('GET');
      req.flush(USER_MOCK);
    });
  
    it('should logout cleaning session and going to login', () => {
      // Ensure that we add data related to an "auth" user
      sessionStorage.setItem('auth', JSON.stringify('any value here'));
      const routerSpy = spyOn(router, 'navigate');
      service.logout();
  
      expect(sessionStorage.getItem('auth')).toBeFalsy();
      expect(routerSpy).toHaveBeenCalledWith(['/login']);
    });
  });
});
