import { SharedModule } from 'src/app/shared/shared.module';
import { HomelayoutComponent } from './homelayout.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyCustomMaterialModule } from '../my-custom-material';

@NgModule({
  declarations: [HomelayoutComponent],
  imports: [
    CommonModule,
    DashboardModule,
    MyCustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    UsersModule,
    RouterModule,
  ],
  exports: [HomelayoutComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomelayoutModule { }
