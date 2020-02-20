import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { UsersTableComponent } from './components/users/users-table/users-table.component';
import { UsersDetailComponent } from './components/users/users-detail/users-detail.component';
import { UsersInsertComponent } from './components/users/users-insert/users-insert.component';
import { TransactionsTableComponent } from './components/transactions/transactions-table/transactions-table.component';
import { TransactionsInsertComponent } from './components/transactions/transactions-insert/transactions-insert.component';
import { AlertSectionComponent } from './components/alert-section/alert-section.component';
import { TransactionsDetailComponent } from './components/transactions/transactions-detail/transactions-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    UsersComponent,
    TransactionsComponent,
    UsersTableComponent,
    UsersDetailComponent,
    UsersInsertComponent,
    TransactionsTableComponent,
    TransactionsInsertComponent,
    AlertSectionComponent,
    TransactionsDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
