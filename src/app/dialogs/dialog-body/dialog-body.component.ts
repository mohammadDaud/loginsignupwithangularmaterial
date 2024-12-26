import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modalview/user';
import { TokenserviceService } from '../../services/tokenservice.service';
import { UserserviceService } from 'src/app/services/user/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.css']
})
export class DialogBodyComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private tokenStorage: TokenserviceService,
    private userService:UserserviceService,
    private router: Router) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this.errorMessage = "";
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  onSubmit(editForm: User) {
    console.log(editForm);
    this.userService.updateProfile(editForm).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/home');
      },
      err => {
        console.log(err.error.message);
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  close() {
    this.dialogRef.close();
  }
}
