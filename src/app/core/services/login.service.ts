import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin: boolean;

  login(): void {
    this.isLogin = true;
  }

  logout(): void {
    this.isLogin = false;
  }
}
