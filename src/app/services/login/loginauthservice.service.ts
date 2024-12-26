import { Observable } from 'rxjs';
import { Router, Routes } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/modalview/user';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginauthserviceService {
  public host = environment.apiUrl;
  private resettoken?:string;
  constructor(private http: HttpClient) { }


  Signin(user: User): Observable<any> {
    return this.http.post(`${this.host}/auth/signin`, user, httpOptions);
  }

  Signup(user: User): Observable<any> {
    return this.http.post(`${this.host}/auth/signup`, user, httpOptions);
  }

  forgotPassword(user: User) :Observable<any> {
    return this.http.post(`${this.host}/auth/forgot-password`, user, httpOptions);
  }

  resetPassword(user: User,token:string) {
    return this.http.put(`${this.host}/auth/reset-password?token=${token}`, user, httpOptions);
  }
  
  setResetPasswordToken(token:string)
  {
   this.resettoken=token;
  }
  getResetPasswordToken() :any{
  return this.resettoken;
  }
}
