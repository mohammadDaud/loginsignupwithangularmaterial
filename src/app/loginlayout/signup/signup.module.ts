import { SignupComponent } from './signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutes } from './signup.routes';
import { MyCustomMaterialModule } from 'src/app/my-custom-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignupComponent],
  exports: [SignupComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(SignupRoutes)
  ]
})
export class SignupModule { }
