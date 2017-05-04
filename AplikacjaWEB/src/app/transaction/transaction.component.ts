import { Component, OnInit } from '@angular/core';
import {TransactionService} from "../_services/transaction.service";
import {Router} from "@angular/router";
import {Transaction} from "./transaction";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
   private webTitle: string;

  constructor(private router: Router, private transactionService: TransactionService, private userService: UserService) { }
  public transaction: Transaction[];
  ngOnInit() {
    this.webTitle = 'Branch Of Tools';
    this.getTransaction();
  }

  private transactions: Transaction[] = [];
  getTransaction(){
    this.transactionService.getTransaction()
      .subscribe(
        transactions => this.transactions = transactions
      );
  }

}
