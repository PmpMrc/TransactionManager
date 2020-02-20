import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transactions-insert',
  templateUrl: './transactions-insert.component.html',
  styleUrls: ['./transactions-insert.component.css']
})
export class TransactionsInsertComponent implements OnInit {

  @Output() saved = new EventEmitter<Transaction>();
  valore: number;
  data: Date;

  constructor() { }

  ngOnInit() {
  }

  saveTransaction() {
    const newTransaction: Transaction = {
      id: null,
      value: this.valore,
      transactionDate: this.data,
      user: null
    };
    this.saved.emit(newTransaction);
  }

}
