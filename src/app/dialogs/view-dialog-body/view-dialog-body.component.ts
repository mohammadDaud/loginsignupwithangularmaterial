import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/modalview/user';

@Component({
  selector: 'app-view-dialog-body',
  templateUrl: './view-dialog-body.component.html',
  styleUrls: ['./view-dialog-body.component.css']
})
export class ViewDialogBodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }

}
