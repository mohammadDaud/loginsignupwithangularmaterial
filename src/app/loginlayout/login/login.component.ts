import { HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { LoginauthserviceService } from './../../services/login/loginauthservice.service';
import { TokenserviceService } from './../../services/tokenservice.service';
import { User } from 'src/app/modalview/user';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model = new User();
  isLoggedIn = false;
  isLoginFailed = false;
  resourcesLoaded = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private tokenStorage: TokenserviceService, private authservice: LoginauthserviceService) { }

  ngOnInit(): void {
    this.errorMessage="";
    this.resourcesLoaded = false;
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(loginForm: NgForm) {
    this.model.usernameOrEmail=loginForm.value.usernameOrEmail;
    this.model.password=loginForm.value.password;
    
    this.authservice.Signin(this.model).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.resourcesLoaded=true;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        new HttpResponse().headers.set('token',data.token);
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.resourcesLoaded = false;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }



}
