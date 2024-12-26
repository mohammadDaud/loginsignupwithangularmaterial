import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutes } from './dashboard.routes';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCustomMaterialModule } from 'src/app/my-custom-material';



@NgModule({
  declarations: [DashboardComponent],
  exports :[DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    MyCustomMaterialModule,
    RouterModule.forChild(DashboardRoutes)
  ]
})
export class DashboardModule { }
