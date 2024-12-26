import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogBodyComponent } from 'src/app/dialogs/dialog-body/dialog-body.component';
import { ViewDialogBodyComponent } from 'src/app/dialogs/view-dialog-body/view-dialog-body.component';
import { User } from 'src/app/modalview/user';
import { UserserviceService } from './../../services/user/userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users?: User[];
  public user?: User;
  displayedColumns: string[] = ['name', 'username', 'email', 'createdBy', 'Action'];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  errorMessage = '';
  constructor(private userService: UserserviceService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList() {
    this.userService.getUsers().subscribe(
      response => {
        this.errorMessage = '';
        this.users = response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.data = this.users;
      },
      err => { this.errorMessage = err.error.message; }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getEditUser(id: number) {
    console.log(id);
  }
  getViewUser(id: number) {
    this.dataSource.data.forEach(value => {
      if(value.id==id)
      {
        this.user=value;
      }
  });
    
  }
  deleteUser(id: number) {
    console.log(id);
  }
  openDialog(id:number): void {
    this.dataSource.data.forEach(value => {if(value.id==id){this.user=value;}});
    const dialogRef = this.dialog.open(DialogBodyComponent, {
      width: '500px',
      data: this.user,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
    });
  }
  openViewDialog(id:number): void {
    this.dataSource.data.forEach(value => {if(value.id==id){this.user=value;}});
    const dialogRef = this.dialog.open(ViewDialogBodyComponent, {
      width: '500px',
      data: this.user,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      this.user = result;
    });
  }
}



