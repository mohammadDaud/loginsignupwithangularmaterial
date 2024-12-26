import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modalview/user';
import { TokenserviceService } from 'src/app/services/tokenservice.service';
import { LoginauthserviceService } from './../../services/login/loginauthservice.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  model = new User();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private tokenStorage: TokenserviceService,private loginservice:LoginauthserviceService,private router:Router ) { }

  ngOnInit(): void {
    this.errorMessage="";
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(restForm: NgForm) {
    this.model.email=restForm.value.usernameOrEmail;
    this.loginservice.forgotPassword(this.model).subscribe(
      res => {
      this.loginservice.setResetPasswordToken(res.message);
      this.router.navigateByUrl('/reset-password');
      this.isLoginFailed = false;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    });
  }

  reloadPage() {
    window.location.reload();
  }
}
