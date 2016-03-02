import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {

    // API path
    baseUrl: string = '/src';

    constructor(private http: Http) { }

    loginUser(formValues: Object) {
        // change this to your server login api which will be returning token and basic data
        return this.http.get(this.baseUrl + '/login.json')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    signupUser(formValues: Object) {
        // change this to your server signup api
        // Will also making user logged in & returning token and basic data
        return this.http.get(this.baseUrl + '/login.json')
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
