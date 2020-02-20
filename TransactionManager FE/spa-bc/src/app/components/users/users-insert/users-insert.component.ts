import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-insert',
  templateUrl: './users-insert.component.html',
  styleUrls: ['./users-insert.component.css']
})
export class UsersInsertComponent implements OnInit {

  @Output() saved = new EventEmitter<User>();
  nome: string;
  cognome: string;

  constructor() { }

  ngOnInit() {
  }

  saveUser() {
    const newUser: User = {
      id: null,
      name: this.nome,
      surname: this.cognome
    };
    this.saved.emit(newUser);
  }

}
