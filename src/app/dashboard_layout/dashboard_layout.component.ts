// layout.component.js
import { Component, View } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router, RouterLink, ComponentInstruction, CanActivate } from 'angular2/router';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DataService } from '../shared/services/data.service';
import { checkAuth } from '../auth/check_auth';
import { Auth } from '../auth/auth';

@Component({
  selector: 'dashboard-layout',
  providers: [DataService]
})

@View({
  templateUrl: 'src/app/dashboard_layout/dashboard_layout.component.html',
  directives: [ROUTER_DIRECTIVES]
})


export class DashboardLayoutComponent {

  constructor(private _router: Router, private _auth:Auth) {
      console.log('Layout');
  }

  logout() {

    this._auth.logout();
  }

}
