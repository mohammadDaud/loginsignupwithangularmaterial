import { RouterModule } from '@angular/router';
import { MyCustomMaterialModule } from './../my-custom-material';
import { LoginlayoutComponent } from './loginlayout.component';
import { SharedModule } from './../shared/shared.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { RestPasswordComponent } from './rest-password/rest-password.component';



@NgModule({
  declarations: [LoginlayoutComponent],
  exports: [ LoginlayoutComponent ],
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule,
    SharedModule,
    MyCustomMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginlayoutModule { }
