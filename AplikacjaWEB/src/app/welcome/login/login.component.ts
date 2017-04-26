import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../_services/login.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loading = false;
  error = '';

  private loginForm: FormGroup;
  private username: FormControl = new FormControl();
  private password: FormControl = new FormControl();

  constructor(private router: Router, private loginService: LoginService) {
  }

  createFormControls(): void {
    this.username = new FormControl('', [
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required
    ]);
  }

  createForm(): void {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
    this.loginService.logout();
  }

  login() {
    this.loading = true;
    this.loginService.login(this.username.value, this.password.value)
      .subscribe(
        result => {
          this.router.navigate(['/home']);
          setTimeout(() => {
            location.reload();
          }, 1);
        },
        error => {
          this.error = 'Username or password is incorrect';
          this.loading = false;
          this.loginForm.reset();
          this.username.setErrors(null);
          this.password.setErrors(null);
        }
      );
  }

}
