import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const ELEMENT_DATA: any[] = [
    {name: 'Apartment 16'},
    {name: 'Parker Hill'},
    {name: 'Personal'}
  ];

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: []
})
  
export class HomeComponent{
    constructor(private _routes: Router){}
    displayedColumns: string[] = ['name'];
    dataSource = ELEMENT_DATA;

    selectedGroup(group : any){
        this._routes.navigate(['Group']);
        return true;
    }
}