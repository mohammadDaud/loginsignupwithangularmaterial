import { LoginauthserviceService } from './../services/login/loginauthservice.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { TokenserviceService } from '../services/tokenservice.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenserviceService,private authService:LoginauthserviceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
  
  if (request.url.includes(`${this.authService.host}/auth/signin`))
    {
    return next.handle(request);
    }
    if (request.url.includes(`${this.authService.host}/auth/signup`))
    {
    return next.handle(request);
    }
    if (request.url.includes(`${this.authService.host}/auth/restPassword`))
    {
    return next.handle(request);
    }
    const token = this.tokenService.getToken();
    if(token!=null)
    {
    const req = request.clone({setHeaders: {Authorization: `Bearer ${token}`}});
    return next.handle(req);
    }
    else{
      return next.handle(request);
    }
  }
}
export const interceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }
];
