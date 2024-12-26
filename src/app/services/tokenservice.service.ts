import { Router, Routes } from '@angular/router';
import { User } from 'src/app/modalview/user';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token';
const USER_KEY = 'userDetails';

@Injectable({
  providedIn: 'root'
})
export class TokenserviceService {
  user = new User();

  constructor(private router: Router) { }

  logOut() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.clear();
    return true;
  }

  public saveToken(token: string) {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): any {
   return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: User) {
    localStorage.removeItem(USER_KEY);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem(USER_KEY) || '');
  }

  isAuthenticated() {
    if (!localStorage.getItem(USER_KEY)) {
      return false;
    }
    else {
      return true;
    }
  }
}
