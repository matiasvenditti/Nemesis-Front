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
import { SearchComponent } from './home/search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { StoreLabelComponent } from './profile/store-label/store-label.component';
import { ProfileService } from '../services/profile.service';
import { SettingsComponent } from './profile/settings/settings.component';
import { AddComponent } from './profile/add/add.component';
import { StoreFormComponent } from './profile/store-form/store-form.component';
import { StoreService } from '../services/store.service';
import { StoreProfileComponent } from './store-profile/store-profile.component';
import { ProductLabelComponent } from './store-profile/product-label/product-label.component';
import { ProductFormComponent } from './store-profile/product-form/product-form.component';
import { ProductService } from '../services/product.service';
import { PaginationService } from '../services/pagination.service';
import { UserService } from '../services/user.service';
import { StoreResultComponent } from './home/store-result/store-result.component';
import { CartComponent } from './cart/cart.component';
import { CartLabelComponent } from './cart/cart-label/cart-label.component';
import { SuccessComponent } from './success/success.component';
import { ContactComponent } from './home/contact/contact.component';
import { ImageFormComponent } from './profile/image-form/image-form.component';


var appRoutes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'store/:id', component: StoreProfileComponent},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard]}
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
    SearchComponent,
    ProfileComponent,
    StoreLabelComponent,
    SettingsComponent,
    AddComponent,
    StoreFormComponent,
    StoreProfileComponent,
    ProductLabelComponent,
    ProductFormComponent,
    StoreResultComponent,
    CartComponent,
    CartLabelComponent,
    SuccessComponent,
    ContactComponent,
    ImageFormComponent
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
    ProfileService,
    StoreService,
    ProductService,
    PaginationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
