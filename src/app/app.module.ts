import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomelayoutComponent } from './homelayout/homelayout.component';
import { interceptorProviders } from './interceptors/interceptor.interceptor';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { MyCustomMaterialModule } from './my-custom-material';
import { LoginauthserviceService } from './services/login/loginauthservice.service';
import { TokenserviceService } from './services/tokenservice.service';
import { UserserviceService } from './services/user/userservice.service';



@NgModule({
  declarations: [
    AppComponent,
    HomelayoutComponent,
    LoginlayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyCustomMaterialModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [interceptorProviders,LoginauthserviceService,UserserviceService,TokenserviceService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
