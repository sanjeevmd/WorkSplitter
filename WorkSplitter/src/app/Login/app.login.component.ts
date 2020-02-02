import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {AuthService, GoogleLoginProvider} from 'angular4-social-login';

@Component({
    selector: 'login',
    templateUrl: './app-login.component.html',
    styleUrls: ['./app-login.component.css']
  })

export class LoginComponent{  
    constructor(private _routes: Router, private _socialAuthService: AuthService){}
    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
      });
      user : any;
      googleSignIn(): void{
        let platform = GoogleLoginProvider.PROVIDER_ID;
        this._socialAuthService.signIn(platform).then(response=>{
          sessionStorage.removeItem("UserName");
          this.user = response;
          sessionStorage.setItem("UserName",this.user.name);
          var photo = response.photoUrl;
          sessionStorage.setItem("Photo",photo);
          //GET https://www.google.com/m8/feeds/contacts/{userEmail}/full?updated-min=2007-03-16T00:00:00
          this._routes.navigate(['layout']);
          }
        );
      }
      submit() {
        if (this.form.valid) {
          this.submitEM.emit(this.form.value);
        }
      }
      register(){
        this._routes.navigate(['register']);
      }
      @Input() error: string | null;
    
      @Output() submitEM = new EventEmitter();
}