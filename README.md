# angular2-dashboard-starter

##Features

- Ready to use dashboard starter/seed project based on Angular 2
- Angular version 2.0.0-beta.6 using Typescript
- Live reload & compile
- Login module
- Signup module (Todo)
- Auth module to protect dashboard pages
- Dashboard Layout as a separate directive
- Best open source admin dashboard & control panel theme ['AdminLTE 2'](https://almsaeedstudio.com/) by Abdullah Almsaeed.

## Running the Application

1. Run `npm install` once to install app dependencies

2. Run `npm start` in a separate terminal window to start the server and launch the app

## Protecting Routes

```TypeScript
import { ComponentInstruction, CanActivate } from 'angular2/router';
import { checkAuth } from '../auth/check_auth';

// just include this code above your component class
@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  return checkAuth(next, previous);
})
```

## Easy to use Dashboard Layout in your templates

Use DashboardLayout directive in your component's template to use dashboard layout. This makes easy for views in our app which do not utilize dashboard layout.

```HTML
<dashboard-layout pageTitle="Home" pageSubtitle="Your personalized dashboard & control panel">
    <div class="home">
      <!--- Your template code --->
    </div>
</dashboard-layout>
```
