import { HomeauthguardGuard } from './../guards/homeauthguard.guard';
import { HomelayoutComponent } from './homelayout.component';
import { Route } from "@angular/router";

export const HomeLayoutRoutes: Route[] = [
    {
        path: '',
        component: HomelayoutComponent,
        canActivate:[HomeauthguardGuard],
        children: [
            { path: '', loadChildren: () => import('../homelayout/dashboard/dashboard.module').then(m => m.DashboardModule)},
            { path: 'user', loadChildren: () => import('../homelayout/users/users.module').then(m => m.UsersModule) },
            { path: 'user/:username', loadChildren: () => import('../homelayout/users/users.module').then(m => m.UsersModule) },
            { path: 'user/:username/:id', loadChildren: () => import('../homelayout/users/users.module').then(m => m.UsersModule) }
        ]
    }
]