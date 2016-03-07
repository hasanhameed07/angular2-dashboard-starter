// login.component.js
import { Component, View, ViewEncapsulation } from 'angular2/core';
import { Router, RouterLink, ComponentInstruction, CanActivate  } from 'angular2/router';
import { CORE_DIRECTIVES,
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES } from 'angular2/common';
import { DataService } from '../../shared/services/data.service';
import { Auth } from '../auth/auth';
import { checkAuth } from '../auth/check_auth';

@Component({
    selector: 'login',
    providers: [DataService, Auth],
    directives: [RouterLink],
    templateUrl: 'src/app/auth_module/login/login.component.html',
    styles: [`
      body {
          background: #d2d6de;
      }
  `],
    encapsulation: ViewEncapsulation.None
})

@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
    return checkAuth(next, previous);
})

export class LoginComponent {
    form: ControlGroup
    username: Control
    password: Control

    constructor(private _router: Router, private _dataService: DataService, private _auth: Auth, private _formBuilder: FormBuilder) {
        this.username = new Control("", Validators.compose([Validators.required]));
        this.password = new Control("", Validators.compose([Validators.required]));

        this.form = _formBuilder.group({
            username: this.username,
            password: this.password,
        });
    }

    login(event: Event) {
        // This will be called when the user clicks on the Login button
        event.preventDefault();

        this._dataService.loginUser(this.form.value)
            .subscribe((response) => {

                this._auth.login(response);
                // and then we redirect the user to the home
                this._router.navigate(['\Home']);
            });

    }
}
