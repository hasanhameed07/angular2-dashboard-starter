// signup.component.js
import { Component, View, ViewEncapsulation, AfterViewInit } from 'angular2/core';
import { Router, RouterLink, ComponentInstruction, CanActivate  } from 'angular2/router';
import { CORE_DIRECTIVES,
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES } from 'angular2/common';
import { CommonValidators } from '../../shared/validators/common';
import { DataService } from '../../shared/services/data.service';
import { Auth } from '../auth/auth';
import { checkAuth } from '../auth/check_auth';

declare var jQuery: JQueryStatic;

@Component({
    selector: 'signup',
    providers: [DataService, Auth],
    directives: [FORM_DIRECTIVES, RouterLink],
    templateUrl: 'src/app/auth_module/signup/signup.component.html',
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

export class SignupComponent implements AfterViewInit {

    form: ControlGroup
    appName: Control
    username: Control
    email: Control
    password: Control
    passwordConfirm: Control

    ngAfterViewInit() {
        jQuery('input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        });
    }

    constructor(private _router: Router, private _dataService: DataService, private _auth: Auth, private _formBuilder: FormBuilder) {
        this.appName = new Control("", Validators.compose([Validators.required]));
        this.username = new Control("", Validators.compose([Validators.required]));
        this.email = new Control("", Validators.compose([Validators.required, CommonValidators.email]));
        this.password = new Control("", Validators.compose([Validators.required]));
        this.passwordConfirm = new Control("", Validators.compose([Validators.required]));

        this.form = _formBuilder.group({
            appName: this.appName,
            username: this.username,
            email: this.email,
            password: this.password,
            passwordConfirm: this.passwordConfirm
        }, { validator: CommonValidators.matchingPasswords('password', 'passwordConfirm') });
    }

    submitForm() {
        console.log(JSON.stringify(this.form.value));

        this._dataService.signupUser(this.form.value)
            .subscribe((response) => {
                // login user
                this._auth.login(response);
                // and then we redirect the user to the home
                this._router.navigate(['\Home']);
            });
    }

}
