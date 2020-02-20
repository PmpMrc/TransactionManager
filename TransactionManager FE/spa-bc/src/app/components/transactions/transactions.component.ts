import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/models/Transaction';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  users: User[];
  selectedUser: User;
  transactions: Transaction[];
  showInsert = false;
  showDetail = false;
  showTransactionTable = false;
  transactionSelected: Transaction;
  transactionToInsert: Transaction;

  constructor(
    private userService: UserService,
    private transactionService: TransactionService,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.userService.getAll().subscribe( (data) => this.users = data);
  }

  userSelected() {
    this.alertService.eraseAlert();
    if (this.selectedUser !== undefined && this.selectedUser != null) {
      this.showTransactionTable = true;
      this.transactionService.getAllByUser(this.selectedUser).subscribe( (data) => this.transactions = data );
    } else {
      this.showTransactionTable = false;
    }
  }

  showInsertSection() {
    this.alertService.eraseAlert();
    this.showInsert = true;
    this.showDetail = false;
  }

  showDetailSection(event) {
    this.alertService.eraseAlert();
    this.transactionSelected = event;
    this.showDetail = false;
    this.showInsert = false;
    setTimeout( () => {
      this.showDetail = true;
    }, 100);
  }

  insertTransaction(event) {
    if (this.checkTransactionValidity(event)) {
      this.alertService.eraseAlert();
      this.transactionToInsert = event;
      this.transactionToInsert.user = this.selectedUser;
      this.transactionService.insertTransaction(this.transactionToInsert).subscribe( (data) => {
        this.showInsert = false;
        if (data !== undefined && data != null) {
          this.transactionService.getAllByUser(this.selectedUser).subscribe( (data2) => this.transactions = data2 );
          this.alertService.sendAlert('Success', 'Inserimento avvenuto con successo');
        }
      });
    }
  }

  updateTransaction(event) {
    if (this.checkTransactionValidity(event)) {
      this.alertService.eraseAlert();
      this.transactionService.updateTransaction(event).subscribe( (data) => {
        this.showDetail = false;
        if (data !== undefined && data != null) {
          this.transactionService.getAllByUser(this.selectedUser).subscribe( (data2) => this.transactions = data2 );
          this.alertService.sendAlert('Success', 'Aggiornamento avvenuto con successo');
        }
      });
    }
  }

  private checkTransactionValidity(transaction: Transaction) {
    if (transaction.transactionDate === undefined || transaction.value === undefined) {
      this.alertService.sendAlert('Error', 'I campi della transazione non devono essere vuoti');
      return false;
    }
    return true;
  }



}
