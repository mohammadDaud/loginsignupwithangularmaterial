import { SharedModule } from 'src/app/shared/shared.module';
import { ForgetRoutes } from './forget.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetComponent } from './forget.component';
import { MyCustomMaterialModule } from 'src/app/my-custom-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ForgetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyCustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ForgetRoutes)
  ]
})
export class ForgetModule { }
