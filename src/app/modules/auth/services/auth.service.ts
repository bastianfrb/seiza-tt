import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../core/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _apiService: ApiService,
    private _toastr: ToastrService,
    private _router: Router
  ) { }

  public doLogin(loginForm: { username: string, password: string }): void {
      this._apiService.get(`cliente/${loginForm.username}`).subscribe({
        next: (response) => sessionStorage.setItem('auth', JSON.stringify(response)),
        error: () => this._toastr.error('Credenciales incorrectas'),
        complete: () => this._router.navigate(['home'])
      });
  }

  public isAuthorized(): boolean {
    return Boolean(sessionStorage.getItem('auth'));
  }

  public logout(): void {
    sessionStorage.removeItem('auth');
    this._router.navigate(['/login']);
  }
}
