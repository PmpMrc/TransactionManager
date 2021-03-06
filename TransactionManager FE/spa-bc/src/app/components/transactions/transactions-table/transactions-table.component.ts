import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css']
})
export class TransactionsTableComponent implements OnInit {

  @Input() transactions: Transaction[];
  @Output() selected = new EventEmitter<Transaction>();

  constructor() { }

  ngOnInit() {
  }

  selectedTransaction(index) {
    this.selected.emit(this.transactions[index]);
  }

}
