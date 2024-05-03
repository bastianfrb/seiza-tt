import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public user: IUser;

  constructor(private _authService: AuthService) {
    this.user = JSON.parse(sessionStorage.getItem('auth') as any) as IUser;
  }

  public logout(): void {
    this._authService.logout();
  }
}
