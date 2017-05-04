import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../_services/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-end-transaction',
  templateUrl: './end-transaction.component.html',
  styleUrls: ['./end-transaction.component.css']
})
export class EndTransactionComponent implements OnInit {
  loading = false;
  error = '';
  private endtransactionForm: FormGroup;
  private data_end: FormControl = new FormControl();
  private price: FormControl = new FormControl();
  private transactionId: FormControl = new FormControl();

  constructor(private router: Router, private userService: UserService) {
  }

  createFormControls(): void {
    this.data_end = new FormControl('', [
      Validators.required
    ]);
    this.price = new FormControl('', [
      Validators.required
    ]);
    this.transactionId = new FormControl('', [
      Validators.required
    ]);
  }

  createForm(): void {
    this.endtransactionForm = new FormGroup({
      data_end: this.data_end,
      price: this.price,
      transactionId: this.transactionId
    });
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  endtransaction() {
    this.loading = true;
    this.userService.endtransaction(this.data_end.value, this.price.value, this.transactionId.value)
      .subscribe(
        result => {
          this.router.navigate(['/home']);
          setTimeout(() => {
            location.reload();
          }, 1);
        },

        error => {
          this.error = 'Something wrong';
          this.endtransactionForm.reset();
          //this.error = error.toString().substr(7, error.length);
        }
      );
  }
}
