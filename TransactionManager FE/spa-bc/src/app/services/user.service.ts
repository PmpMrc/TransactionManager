import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';
import { DeleteResponse } from '../models/DeleteResponse';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient ) { }

  getAll() {
    return this.httpClient.post<User[]>('http://localhost:8081/users/getUsers', {}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  insertUser(user: User) {
    return this.httpClient.post<User>('http://localhost:8081/users/insertUser', user).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  updateUser(user: User) {
    return this.httpClient.post<User>('http://localhost:8081/users/updateUser', user).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  deleteUser(user: User) {
    return this.httpClient.post<DeleteResponse>('http://localhost:8081/users/deleteUser', user).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }


  handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('ERRORE', errorResponse.error.message);
    } else {
      console.error(`BACKEND RETURNED CODE ${errorResponse.status}, ` +
      `body was: ${errorResponse.error}`);
    }
    return throwError(
      'something bad happens'
    );
  }

}
