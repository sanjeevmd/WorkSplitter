import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Login/app-register.component';
import { AuthGuard} from './auth.guard'

const routes: Routes = [
  { path: 'layout', loadChildren: './Layout/app-layout.module#LayoutModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './Login/app-login.module#LoginModule' },
  { path: 'register', component: RegistrationComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
