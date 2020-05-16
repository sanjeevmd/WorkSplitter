import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './Login/app-register.component';
import { MaterialModule } from './Shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angular4-social-login';

const google_oauth_client_id : string = ""

let config = new AuthServiceConfig([
  {
    id : GoogleLoginProvider.PROVIDER_ID,
    provider : new GoogleLoginProvider(google_oauth_client_id),
  }
])

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,SocialLoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule, CommonModule,
   
  ],
  providers : [{provide : AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
