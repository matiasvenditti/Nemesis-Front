import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { SignupFormComponent } from './signup/signup-form/signup-form.component';
import { HomeLabelComponent } from './home/home-label/home-label.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../model/guard';
import { AuthenticationService } from '../services/authentication.service';


var appRoutes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    SignupComponent,
    SignupFormComponent,
    HomeLabelComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
