import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private _authService: AuthService,
    private _router: Router
  ) {}

  public canActivate(): boolean {
    if (!this._authService.isAuthorized()) {
      this._router.navigate(['/login']);
    }

    return this._authService.isAuthorized();
  }
}
