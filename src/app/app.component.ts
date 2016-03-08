// app.component.js
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, ComponentInstruction, CanActivate } from 'angular2/router';
import { CustomRouterOutlet } from './shared/directives/custom-router-outlet';
import { checkAuth } from './auth_module/auth/check_auth';
import { LoginComponent } from './auth_module/login/login.component';
import { SignupComponent } from './auth_module/signup/signup.component';
import { HomeComponent } from './home/home.component';


@Component({
    selector: 'app-container',
    template: '<custom-router-outlet></custom-router-outlet>',
    directives: [CustomRouterOutlet],
})
@RouteConfig([
    { path: '/home', as: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/login', as: 'Login', component: LoginComponent },
    { path: '/signup', as: 'Signup', component: SignupComponent },
    { path: '/**', redirectTo: ['Home'] }
])
export class AppComponent {


    constructor() {
    }


}
