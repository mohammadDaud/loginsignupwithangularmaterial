import { ViewDialogBodyComponent } from './../../dialogs/view-dialog-body/view-dialog-body.component';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersRoutes } from './users.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCustomMaterialModule } from 'src/app/my-custom-material';
import { DialogBodyComponent } from 'src/app/dialogs/dialog-body/dialog-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsersComponent,DialogBodyComponent,ViewDialogBodyComponent],
  exports: [UsersComponent,DialogBodyComponent,ViewDialogBodyComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MyCustomMaterialModule,
    RouterModule.forChild(UsersRoutes)
  ],
  entryComponents: [DialogBodyComponent,ViewDialogBodyComponent]
})
export class UsersModule { }
