import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './app-layout.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
      path:'',
      component:LayoutComponent,
      children:[
        { path:'home',loadChildren:'./home/home.module#HomeModule', canActivate: [AuthGuard]},
        { path:'group',loadChildren:'./group/group.module#GroupModule', canActivate: [AuthGuard]}
        ]
    }
 ];

 @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })

export class LayoutRoutingModule { }