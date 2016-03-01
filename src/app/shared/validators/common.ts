import { Control, ControlGroup } from "angular2/common";

interface ValidationResult{
   [key:string]:boolean;
}

export class CommonValidators {

    static email(control: Control): ValidationResult {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( control.value != "" && re.test(control.value) ){
        return null;
      }

      return {"email": true};
    }


    static matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: ControlGroup): {[key: string]: any} => {
          let password = group.controls[passwordKey];
          let confirmPassword = group.controls[confirmPasswordKey];
          if (password.value !== confirmPassword.value) {
            return {
              matchingPasswords: true
            };
          }
        }
      }

}
