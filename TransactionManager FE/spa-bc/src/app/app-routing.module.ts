import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UsersComponent } from './components/users/users.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'index', component: MainComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
