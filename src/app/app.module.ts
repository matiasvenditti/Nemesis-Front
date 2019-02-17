import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
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
import { EditUserComponent } from './edit/edit-user/edit-user.component';
import { EditProductComponent } from './edit/edit-product/edit-product.component';
import { EditStoreComponent } from './edit/edit-store/edit-store.component';
import { ProductResultComponent } from './home/product-result/product-result.component';
import { CartTextComponent } from './store-profile/cart-text/cart-text.component';
import { CartFormComponent } from './cart/cart-form/cart-form.component';
import { NoImagePipe } from './pipes/no-image.pipe';
import { CategoryService } from '../services/category.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule, MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { CartModalComponent } from './cart-modal/cart-modal.component';
import { HistoryComponent } from './history/history.component';
import { ProductProfileComponent } from './product-profile/product-profile.component';
import { HeaderComponent } from './header/header.component';
import { StoreModalComponent } from './store-modal/store-modal.component';
import { CustomError } from '../services/custom-error';


var appRoutes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: '', component: HomeComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'store/:id', component: StoreProfileComponent},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'success', component: SuccessComponent, canActivate: [AuthGuard]},
  { path: 'edit/user/:id', component: EditUserComponent, canActivate: [AuthGuard]},
  { path: 'edit/product/:id', component: EditProductComponent, canActivate: [AuthGuard]},
  { path: 'edit/store/:id', component: EditStoreComponent, canActivate: [AuthGuard]},
  { path: 'history/:id', component: HistoryComponent, canActivate: [AuthGuard]},
  { path: 'product/:id', component: ProductProfileComponent}
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
    ImageFormComponent,
    EditUserComponent,
    EditProductComponent,
    EditStoreComponent,
    ProductResultComponent,
    CartTextComponent,
    CartFormComponent,
    NoImagePipe,
    CartModalComponent,
    HistoryComponent,
    ProductProfileComponent,
    HeaderComponent,
    StoreModalComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    ProfileService,
    StoreService,
    ProductService,
    PaginationService,
    UserService,
    CategoryService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}},
    {provide: ErrorHandler, useClass: CustomError}
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CartModalComponent,
    StoreModalComponent
  ]
})
export class AppModule { }
