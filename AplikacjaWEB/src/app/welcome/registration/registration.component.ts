import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../_services/user.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  private user: User = {
    name: '',
    username: '',
    address: '',
    password: '',
    employee: 'true'
  };

  private loading = false;
  private error = '';
  private success = '';

  private registerForm: FormGroup;
  private name: FormControl = new FormControl();
  private username: FormControl = new FormControl();
  private address: FormControl = new FormControl();
  private password: FormControl = new FormControl();
  private confirmPassword: FormControl = new FormControl();

  constructor(private userService: UserService) {}

  createFormControls(): void {
    this.name = new FormControl('', [
      Validators.required
    ]);
    this.username = new FormControl('', Validators.required);
    this.address = new FormControl('', [
      Validators.required
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$&+,:;=?@#|\'<>.^*()\\%!-]).+$')
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30)
    ]);
  }

  createForm(): void {
    this.registerForm = new FormGroup({
      name: this.name,
      username: this.username,
      address: this.address,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  register() {
    this.loading = true;
    this.userService.register(this.name.value, this.address.value, this.password.value, this.username.value)
      .subscribe(
        data => {
          this.error = '';
          this.success = 'You have been registered! Your login option is available.';
          this.loading = false;
        },
        error => {
          this.error = 'Something wrong!';
          this.loading = false;
        });
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

}
