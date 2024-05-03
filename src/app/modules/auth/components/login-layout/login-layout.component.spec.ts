import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { LoginLayoutComponent } from './login-layout.component';
import { AuthService } from '../../services/auth.service';

describe('LoginLayoutComponent', () => {
  let component: LoginLayoutComponent;
  let fixture: ComponentFixture<LoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginLayoutComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        RouterTestingModule
      ],
      providers: [AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form', () => {
    const loginFormSpy = spyOn(component, 'loginForm' as any);
    component.ngOnInit();
    expect(loginFormSpy).toBeTruthy();
  });

  it('should do nothing on invalid form', () => {
    const authService = TestBed.inject(AuthService);
    const spyOnSubmit = spyOn(authService, 'doLogin');
    component.ngOnInit();
    // Initialize form with "empty" values (invalid)
    component.loginForm.patchValue({ username: '', password: '' });
    component.onSubmit();
    expect(spyOnSubmit).toHaveBeenCalledTimes(0);
  });

  it('should do nothing on invalid form', () => {
    const authService = TestBed.inject(AuthService);
    const spyOnSubmit = spyOn(authService, 'doLogin');
    component.ngOnInit();
    // Initialize form with "empty" values (invalid)
    component.loginForm.patchValue({ username: '', password: '' });
    component.onSubmit();
    expect(spyOnSubmit).not.toHaveBeenCalled();
  });

  it('should submit on valid form', () => {
    const authService = TestBed.inject(AuthService);
    const spyOnSubmit = spyOn(authService, 'doLogin');
    component.ngOnInit();
    // Initialize form with "empty" values (invalid)
    component.loginForm.patchValue({ username: '123', password: '123' });
    component.onSubmit();
    expect(spyOnSubmit).toHaveBeenCalled();
  });
});
