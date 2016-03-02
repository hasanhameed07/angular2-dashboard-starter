// app.component.js
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, RouteConfig, ComponentInstruction, CanActivate } from 'angular2/router';
import { checkAuth } from './auth/check_auth';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';


@Component({
    selector: 'app-container',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES],
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
