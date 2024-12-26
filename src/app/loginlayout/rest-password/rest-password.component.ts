import { LoginauthserviceService } from './../../services/login/loginauthservice.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modalview/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.css']
})
export class RestPasswordComponent implements OnInit {
  model = new User();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private loginservice:LoginauthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(restForm: NgForm) {
    this.model.password=restForm.value.password;
    this.loginservice.resetPassword(this.model,this.loginservice.getResetPasswordToken()).subscribe(
      res => {
      console.log(res);
      this.router.navigateByUrl('/login');
      this.isLoginFailed = false;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    });
  }

}
