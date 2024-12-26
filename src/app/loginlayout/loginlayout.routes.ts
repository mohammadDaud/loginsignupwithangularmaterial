import { RestPasswordModule } from './rest-password/rest-password.module';
import { LoginlayoutComponent } from './loginlayout.component';
import { Route } from "@angular/router";
import { AuthguardGuard } from '../guards/authguard.guard';

export const LoginLayoutRoutes: Route[] = [
    {
        path: '',
        component: LoginlayoutComponent,
        canActivate:[AuthguardGuard],
        children: [
            { path: 'login', loadChildren: () => import('../loginlayout/login/login.module').then(m => m.LoginModule) },
            { path: 'signup', loadChildren: () => import('../loginlayout/signup/signup.module').then(m => m.SignupModule) },
            { path: 'forget', loadChildren: () => import('../loginlayout/forget/forget.module').then(m => m.ForgetModule) },
            { path: 'reset-password', loadChildren: () => import('../loginlayout/rest-password/rest-password.module').then(m => m.RestPasswordModule) }
        ]
    }
]