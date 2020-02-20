import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  @Input() user: User;
  @Output() modified = new EventEmitter<User>();
  @Output() deleted = new EventEmitter<User>();
  nome: string;
  cognome: string;

  constructor() { }

  ngOnInit() {
    this.nome = this.user.name;
    this.cognome = this.user.surname;
  }

  updateUser() {
    this.user.name = this.nome;
    this.user.surname = this.cognome;
    this.modified.emit(this.user);
  }

  deleteUser() {
    this.deleted.emit(this.user);
  }

}
