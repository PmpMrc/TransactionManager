import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/User';
import { UrlSegmentGroup } from '@angular/router';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersInsertComponent } from './users-insert/users-insert.component';
import { timeout } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showInsert = false;
  showDetail = false;
  userSelected: User;

  constructor(private userService: UserService, private alertService: AlertService) { }

  ngOnInit() {
    this.getUsers();
  }

  showInsertSection() {
    this.showInsert = true;
    this.showDetail = false;
    this.alertService.eraseAlert();
  }

  showDetailSection(event) {
    this.userSelected = event;
    this.showDetail = false;
    this.showInsert = false;
    this.alertService.eraseAlert();
    setTimeout( () => {
      this.showDetail = true;
    }, 100);
  }

  getUsers() {
    this.userService.getAll().subscribe( data => this.users = data );
  }

  insertUser(event) {
    if (this.checkUserValidity(event)) {
      this.alertService.eraseAlert();
      this.userService.insertUser(event).subscribe( (data) => {
        this.showInsert = false;
        if (data !== undefined && data != null) {
          this.getUsers();
          this.alertService.sendAlert('Success', 'Inserimento avvenuto con successo');
        }
      });
    }
  }

  updateUser(event) {
    if (this.checkUserValidity(event)) {
      this.alertService.eraseAlert();
      this.userService.updateUser(event).subscribe( (data) => {
        this.showDetail = false;
        if (data !== undefined && data != null) {
          this.getUsers();
          this.alertService.sendAlert('Success', 'Aggiornamento avvenuto con successo');
        }
      });
    }
  }

  deleteUser(event) {
    this.alertService.eraseAlert();
    this.userService.deleteUser(event).subscribe( (data) => {
      this.showDetail = false;
      if (data.esito === 'OK') {
        this.getUsers();
        this.alertService.sendAlert('Success', 'Cancellazione avvenuta con successo');
      } else {
        this.alertService.sendAlert('Error', data.messaggio);
      }
    });
  }

  private checkUserValidity(user: User) {
    if (user.name === '' || user.surname === '' || user.name === undefined || user.surname === undefined) {
      // tslint:disable-next-line: quotemark
      this.alertService.sendAlert('Error', "I campi dell'utente non devono essere vuoti");
      return false;
    }
    return true;
  }

}
