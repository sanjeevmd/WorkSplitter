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

const google_oauth_client_id : string = "1044618247563-d00ht16635l5kapf683i9vp7e88kilbu.apps.googleusercontent.com"

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
    // AngularFireModule.initializeApp(
    //   {
    //     apiKey: "AIzaSyAgIxzLPtSHc9dbU94TOs6pQw63Cu6gn_E",
    //     authDomain: "worksplitter-6429c.firebaseapp.com",
    //     databaseURL: "https://worksplitter-6429c.firebaseio.com",
    //     projectId: "worksplitter-6429c",
    //     storageBucket: "worksplitter-6429c.appspot.com",
    //     messagingSenderId: "1044618247563",
    //     appId: "1:1044618247563:web:32e03923d23c64b62d438e",
    //     measurementId: "G-PD9BTN4YLY"
    //   }
    // )
  ],
  providers : [{provide : AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
