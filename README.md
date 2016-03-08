# angular2-dashboard-starter
Ready to use dashboard starter/seed project based on Angular 2 and AdminLTE bootstrap theme.

[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![dependencies up to date](https://david-dm.org/hasanhameed07/angular2-dashboard-starter.svg)](https://david-dm.org/hasanhameed07/angular2-dashboard-starter)
[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/hasanhameed07/angular2-dashboard-starter)

##Features

- [Angular 2](https://angular.io/) version 2.0.0-beta.8 using [Typescript](http://www.typescriptlang.org/)
- Live reload & compile
- Login module with input validations (Utilizes src/login.json)
- Signup module with input validations
- Auth module to protect dashboard pages
- Environmental Configuration settings
- Dashboard Layout as a separate directive
- Best open source admin dashboard & control panel bootstrap theme ['AdminLTE 2'](https://almsaeedstudio.com/) by Abdullah Almsaeed.

## Installation

1. Checkout this repo in a folder make sure to give root permissions.
2. Run `npm install` once to install app dependencies.
3. Run `npm start` in a separate terminal window to start the server and launch the app.

## Protect Routes

```TypeScript
import { ComponentInstruction, CanActivate } from 'angular2/router';
import { checkAuth } from '../auth/check_auth';

// just include this code above your component class
@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  return checkAuth(next, previous);
})
```

## Easy to use Dashboard Layout in your templates

Use DashboardLayout directive in your component's template to use dashboard layout. This makes easy to comply views with or without layout like login, signup and error pages etc.

```HTML
<dashboard-layout pageTitle="Home" pageSubtitle="Your personalized dashboard and control panel">
    <div class="home">
      <!--- Your template code -->
    </div>
</dashboard-layout>
```

## Configuration

Environmental files are located in `src/app/config/` folder in json format. You can create your own environments and set the one to use in `env.json` file. Config files are loaded after the route hits and before everything is initiated therefore, available throughout in application as a service.

```TypeScript
import {Config} from '../../config/config';

@Injectable()
export class Foo {

    constructor(private _http: Http, private _config: Config) {
      var apiUrl = _config.get('apiUrl');   // from development.json
      var env = _config.getEnv('env');      // from env.json (also holds shared config)
    }
}
```
Config class also ships with methods to store and get application wide custom settings.

```TypeScript
import {Config} from '../../config/config';

@Injectable()
export class Foo {

    constructor(private _http: Http, private _config: Config) {
      _config.setCustom('isMember', true);
    }
}

export class Bar {

    constructor(private _config: Config) {
      var isMember = _config.getCustom('isMember');
    }
}
```

## Use jQuery  

 jQuery being installed as [typings](https://www.npmjs.com/package/typings) dependency. This mean jQuery will be available as static object in your ts.

```TypeScript
declare var jQuery: JQueryStatic;
// now use jQuery as you normally use
```



Help me make it better by your [contribution](./CONTRIBUTING.md).

@author Hasan Hameed <hasan.hameed07@gmail.com>
