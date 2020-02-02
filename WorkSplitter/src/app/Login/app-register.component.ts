import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';

@Component({
selector: 'register',
templateUrl: './app-register.component.html',
styleUrls: ['./app-login.component.css']
})

export class RegistrationComponent {
    constructor(private _routes: Router){}
    form: FormGroup = new FormGroup({
        emailID: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
      });
    
      submit() {
        if (this.form.valid) {
          this.submitEM.emit(this.form.value);
        }
      }
      login(){
        this._routes.navigate(['login']);
      }
      @Input() error: string | null;
    
      @Output() submitEM = new EventEmitter();
}