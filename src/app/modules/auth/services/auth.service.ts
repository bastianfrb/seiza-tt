import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../core/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public doLogin(loginForm: { username: string, password: string }): void {
      this.apiService.get(`cliente/${loginForm.username}`).subscribe({
        next: (response) => sessionStorage.setItem('auth', JSON.stringify(response)),
        error: () => this.toastr.error('Credenciales incorrectas'),
        complete: () => this.router.navigate(['home'])
      });
  }

  public isAuthorized(): boolean {
    return Boolean(sessionStorage.getItem('auth'));
  }

  public logout(): void {
    sessionStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
