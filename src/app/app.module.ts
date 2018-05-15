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
import { TestComponent } from './test/test.component';
import { SearchComponent } from './home/search/search.component';
import { SearchService } from '../services/search.service';
import { ProfileComponent } from './profile/profile.component';
import { StoreLabelComponent } from './profile/store-label/store-label.component';
import { ProfileService } from '../services/profile.service';
import { SettingsComponent } from './profile/settings/settings.component';
import { AddComponent } from './profile/add/add.component';
import { StoreFormComponent } from './profile/store-form/store-form.component';


var appRoutes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomeComponent, canActivate:[AuthGuard]},
  { path: 'test', component: TestComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LoginFormComponent,
    SignupComponent,
    SignupFormComponent,
    HomeLabelComponent,
    TestComponent,
    SearchComponent,
    ProfileComponent,
    StoreLabelComponent,
    SettingsComponent,
    AddComponent,
    StoreFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    SearchService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
