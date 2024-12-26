import { RestPasswordRoutes } from './rest-password.routes';
import { RouterModule } from '@angular/router';
import { MyCustomMaterialModule } from './../../my-custom-material';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestPasswordComponent } from './rest-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RestPasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(RestPasswordRoutes)
  ]
})
export class RestPasswordModule { }
