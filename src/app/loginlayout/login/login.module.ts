import { MyCustomMaterialModule } from './../../my-custom-material';
import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  exports :[LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(LoginRoutes)
  ]
})
export class LoginModule { }
