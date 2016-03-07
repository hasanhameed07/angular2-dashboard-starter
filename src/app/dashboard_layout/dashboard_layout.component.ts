// dashboard.component.js
import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, RouterLink, ComponentInstruction, CanActivate } from 'angular2/router';
import { CORE_DIRECTIVES, NgIf } from 'angular2/common';
import { DataService } from '../shared/services/data.service';
import { checkAuth } from '../auth_module/auth/check_auth';
import { Auth, LoginDataInterface } from '../auth_module/auth/auth';

@Component({
    selector: 'dashboard-layout',
    inputs: ['pageTitle', 'pageSubtitle'],
    providers: [DataService]
})

@View({
    templateUrl: 'src/app/dashboard_layout/dashboard_layout.component.html',
    directives: [ROUTER_DIRECTIVES, NgIf]
})

export class DashboardLayoutComponent {
    public loginData: LoginDataInterface
    public loggedIn: Boolean
    public pageTitle: String
    public pageSubtitle: String

    constructor(private _router: Router, private _auth: Auth) {
        this.loginData = this._auth.loginData;
        this.loggedIn = this._auth.loggedIn;
    }

    logout() {
        this._auth.logout();
        this._router.navigate(['/Login']); // r
    }

}
