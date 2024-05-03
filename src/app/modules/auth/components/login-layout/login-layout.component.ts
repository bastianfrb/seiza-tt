import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent implements OnInit {

  public loginForm!: FormGroup;
  public isLoading: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {
    this.isLoading = false;
  }

  ngOnInit(): void {
    this._setForm();
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginForm.disable();
      this._authService.doLogin(this.loginForm.value).then(() => {
        this.isLoading = false;
        this.loginForm.enable();
      });
    }
  }

  private _setForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

}
