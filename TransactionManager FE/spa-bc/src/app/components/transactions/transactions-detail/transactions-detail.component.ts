import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transactions-detail',
  templateUrl: './transactions-detail.component.html',
  styleUrls: ['./transactions-detail.component.css']
})
export class TransactionsDetailComponent implements OnInit {

  @Input() transaction: Transaction;
  @Output() modified = new EventEmitter<Transaction>();
  valore: number;
  data: Date;

  constructor() { }

  ngOnInit() {
    this.valore = this.transaction.value;
    this.data = this.transaction.transactionDate;
  }

  updateTransaction() {
    this.transaction.value = this.valore;
    this.transaction.transactionDate = this.data;
    this.modified.emit(this.transaction);
  }

}
