import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { USER_MOCK } from '../../tests/mocks';
import { LoginLayoutComponent } from 'src/app/modules/auth/components/login-layout/login-layout.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    // At this point the user is authenticated
    sessionStorage.setItem('auth', JSON.stringify(USER_MOCK));

    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot(),
        RouterTestingModule.withRoutes([{ path: 'login', component: LoginLayoutComponent }]),
        MatMenuModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should logout', () => {
    component.logout();
    expect(sessionStorage.getItem('auth')).toBeFalsy();
  });
});
