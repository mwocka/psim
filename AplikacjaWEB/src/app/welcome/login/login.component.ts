import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../_services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'

})
export class LoginComponent implements OnInit {
  token: Promise<string>;

  loading = false;
  error = '';

  private loginForm: FormGroup;
  private username: FormControl = new FormControl();
  private password: FormControl = new FormControl();

  constructor(private router: Router, private userService: UserService) {
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
    this.userService.logout();
  }

  login() {
    this.loading = true;

    this.userService.login(this.username.value, this.password.value)
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
          //this.error = error.toString().substr(7, error.length);
        }

      );



  }


}
