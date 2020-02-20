import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from '../models/User';
import { Transaction } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor( private httpClient: HttpClient ) { }

  getAllByUser(user: User) {
    return this.httpClient.post<Transaction[]>('http://localhost:8081/transactions/getTransactionsByUser', user).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  insertTransaction(transaction: Transaction) {
    return this.httpClient.post<Transaction>('http://localhost:8081/transactions/insertTransaction', transaction).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  updateTransaction(transaction: Transaction) {
    return this.httpClient.post<Transaction>('http://localhost:8081/transactions/insertTransaction', transaction).pipe(
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
