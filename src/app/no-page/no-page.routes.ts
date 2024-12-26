import { Route } from "@angular/router";
import { NoPageComponent } from "./no-page.component";

export const NoPageRouter: Route[] = [
    {
        path: '**',
        component: NoPageComponent
    }
];