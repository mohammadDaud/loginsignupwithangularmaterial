import { NoPageRouter } from './no-page/no-page.routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutRoutes } from './homelayout/homelayout.routes';
import { LoginLayoutRoutes } from './loginlayout/loginlayout.routes';

const routes: Routes = [
  ...HomeLayoutRoutes,...LoginLayoutRoutes,...NoPageRouter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
