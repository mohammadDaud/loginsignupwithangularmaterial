import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoPageComponent } from './no-page.component';



@NgModule({
  declarations: [
    NoPageComponent
  ],
  exports: [NoPageComponent],
  imports: [
    CommonModule
  ]
})
export class NoPageModule { }
