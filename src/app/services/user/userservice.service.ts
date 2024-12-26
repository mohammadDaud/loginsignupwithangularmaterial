import { Loan } from './../../modalview/loan';
import { Accounttransaction } from './../../modalview/accounttransaction';
import { Account } from './../../modalview/account';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/modalview/contact';
import { environment } from 'src/environments/environment';
import { Card } from 'src/app/modalview/card';
import { User } from 'src/app/modalview/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http: HttpClient) { }
  private host = environment.apiUrl;
  getAccountDetails(account: Account) {
    return this.http.post(`${this.host}/account/accountdetails`, account, { observe: 'response', withCredentials: true });
  }

  getAccountTransactions(accounttransaction: Accounttransaction) {
    return this.http.post(`${this.host}/balance/balancedetails`, accounttransaction, { observe: 'response', withCredentials: true });
  }

  getLoansDetails(loan: Loan) {
    return this.http.post(`${this.host}/loan/loandetails`, loan, { observe: 'response', withCredentials: true });
  }

  getCardsDetails(card: Card) {
    return this.http.post(`${this.host}/card/carddetails`, card, { observe: 'response', withCredentials: true });
  }

  saveMessage(contact: Contact) {
    return this.http.post(`${this.host}/contact/savecontact`, contact, { observe: 'response' });
  }

  public updateProfile(user: User) {
    return this.http.post(`${this.host}/user/updateuser`, user, { observe: 'response', withCredentials: true });
  }

  public deleteUser(id: number) {
    return this.http.delete(`${this.host}/user/delete/${id}`, { observe: 'response', withCredentials: true });
  }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}/user/getAllUser`);
  }
}
