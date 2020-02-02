import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'angular4-social-login';

@Component({
    selector: 'layout',
    templateUrl: './app-layout.component.html',
    styleUrls: []
})

export class LayoutComponent implements OnInit{
    opened = false;
    username : string = "";
    menus : any[];
    Nav : any[];   
    constructor(private _routes: Router, private _socialAuthService: AuthService){}
    ngOnInit() {
        this.username =sessionStorage.getItem("UserName");
        this.Nav = [{ displayName : 'Groups', route : 'home'},
        {displayName : 'Analytics', route : 'group'}, 
    ]
    }
    logout(){
        this._socialAuthService.signOut();
        sessionStorage.removeItem("UserName");
        this._routes.navigate(['login']);
    }
    getURL(param : any){
        this._routes.navigate(['/layout/' + param.route]);
    }
    returnPath(){
        return sessionStorage.getItem("Photo");
    }
}

