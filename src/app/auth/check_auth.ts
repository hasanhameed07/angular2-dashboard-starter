import {Injector} from 'angular2/core';
import {appInjector} from './app_injector';
import {Auth} from './auth';
import {Router, ComponentInstruction, Location} from 'angular2/router';

export const checkAuth = (next: ComponentInstruction, previous: ComponentInstruction) => {
    let injector: Injector = appInjector(); // get the stored reference to the injector
    let auth: Auth = injector.get(Auth);
    let router: Router = injector.get(Router);
    let location: Location = injector.get(Location);

    // return a boolean or a promise that resolves a boolean
    return new Promise((resolve, reject) => {

        if (auth.check()) {
            // already login, redirect to default page
            if (next.urlPath == 'login' || next.urlPath == 'signup') {
                router.navigate(['/Home']);	// r
                // window.location.href = 'index.html';
                resolve(false);
            }
            // show the page
            else {
                resolve(true);
            }
        } else {
            // not login; show the login page
            if (next.urlPath == 'login' || next.urlPath == 'signup') {
                resolve(true);
            }
            // restrict the page
            else {
                router.navigate(['/Login']); // r
                // window.location.href = 'login.html';
                resolve(false);
            }
        }
    });
};
