import { Injectable } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { StorageService } from '../../core/services/storage.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private storageService: StorageService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  public doLogin(loginForm: { username: string, password: string }): void {
      this.apiService.post('login', loginForm).subscribe({
        next: (response) => {
          this.storageService.saveSession('auth', response);
          this.storageService.saveSession('access_token', response.token);
        },
        error: () => this.toastr.error('Credenciales incorrectas'),
        complete: () => this.router.navigate(['home'])
      });
  }

  public isAuthorized(): boolean {
    return Boolean(this.storageService.getSession('auth'));
  }

  public logout(): void {
    this.storageService.deleteSession('auth');
    this.storageService.deleteSession('access_token');
    this.router.navigate(['/login']);
  }
}
