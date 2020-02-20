import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  @Input() users: User[];
  @Output() selected = new EventEmitter<User>();

  constructor() { }

  ngOnInit() {
  }

  selectedUser(index) {
    this.selected.emit(this.users[index]);
  }

}
