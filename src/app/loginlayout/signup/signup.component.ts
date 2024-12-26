import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/modalview/user';
import { TokenserviceService } from 'src/app/services/tokenservice.service';
import { LoginauthserviceService } from './../../services/login/loginauthservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model = new User();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  file!: File;
  constructor(private tokenStorage: TokenserviceService, 
    private loginservice: LoginauthserviceService, 
    private router: Router) { }

  ngOnInit(): void {
    this.errorMessage = "";
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
 
  onSubmit(signinForm: NgForm) {
    this.model.name = signinForm.value.name;
    this.model.username = signinForm.value.username;
    this.model.email = signinForm.value.email;
    this.model.password = signinForm.value.password;
    this.loginservice.Signup(this.model).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/login');
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}
