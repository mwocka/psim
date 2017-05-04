import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../_services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-make-transaction',
  templateUrl: './make-transaction.component.html',
  styleUrls: ['./make-transaction.component.css']
})
export class MakeTransactionComponent implements OnInit {

  loading = false;
  error = '';
  private maketransactionForm: FormGroup;
  private c_username: FormControl = new FormControl();
  private e_username: FormControl = new FormControl();
  private data_start: FormControl = new FormControl();

  constructor(private router: Router, private userService: UserService) {
  }

  createFormControls(): void {
    this.c_username = new FormControl('', [
      Validators.required
    ]);
    this.e_username = new FormControl('', [
      Validators.required
    ]);
    this.data_start = new FormControl('', [
      Validators.required
    ]);
  }

  createForm(): void {
    this.maketransactionForm = new FormGroup({
      c_username: this.c_username,
      e_username: this.e_username,
      data_start: this.data_start
    });
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  maketransaction() {
    this.loading = true;
    this.userService.maketransaction(this.c_username.value, this.e_username.value, this.data_start.value)
      .subscribe(
        result => {
          this.router.navigate(['/home']);
          setTimeout(() => {
            location.reload();
          }, 1);
        },

        error => {
          this.error = 'Something wrong';
          this.maketransactionForm.reset();
          //this.error = error.toString().substr(7, error.length);
        }
      );
  }
}
