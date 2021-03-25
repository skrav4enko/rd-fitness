import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    firstName: '',
    password: '',
    saveCredentials: false,
    obg: {},
  };

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit(form): void {
    this.loginService.login();
    console.log(form.form);
  }
}
