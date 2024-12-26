import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyCustomMaterialModule } from './../my-custom-material';
import { CommonModule } from '@angular/common';
import { LoginheaderComponent } from './loginheader/loginheader.component';
import { LoginfooterComponent } from './loginfooter/loginfooter.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { HomesidebarComponent } from './homesidebar/homesidebar.component';



@NgModule({
  declarations: [
    LoginheaderComponent,
    LoginfooterComponent,
    HomeheaderComponent,
    HomefooterComponent,
    HomesidebarComponent
  ],
  exports: [
    LoginheaderComponent,
    LoginfooterComponent,
    HomeheaderComponent,
    HomefooterComponent,
    HomesidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MyCustomMaterialModule
  ]
})
export class SharedModule { }
