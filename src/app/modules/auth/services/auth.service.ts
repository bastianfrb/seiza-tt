import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../../core/services/api/api.service';
import { StorageService } from '../../core/services/storage/storage.service';

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
      this.apiService.get(`cliente/${loginForm.username}`).subscribe({
        next: (response) => this.storageService.saveSession('auth', response),
        error: () => this.toastr.error('Credenciales incorrectas'),
        complete: () => this.router.navigate(['home'])
      });
  }

  public isAuthorized(): boolean {
    return Boolean(this.storageService.getSession('auth'));
  }

  public logout(): void {
    this.storageService.deleteSession('auth');
    this.router.navigate(['/login']);
  }
}
