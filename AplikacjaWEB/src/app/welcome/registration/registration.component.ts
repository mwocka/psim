import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  private registerForm: FormGroup;
  private name: FormControl = new FormControl();
  private username: FormControl = new FormControl();
  private adress: FormControl = new FormControl();
  private password: FormControl = new FormControl();
  private confirmPassword: FormControl = new FormControl();

  constructor() {}

  createFormControls(): void {
    this.name = new FormControl('', [
      Validators.required
    ]);
    this.username = new FormControl('', Validators.required);
    this.adress = new FormControl('', [
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
      adress: this.adress,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

}
