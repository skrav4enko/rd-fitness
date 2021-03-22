import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form): void {
    console.log(form.form);
  }
}
