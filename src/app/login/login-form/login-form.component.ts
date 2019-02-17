import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{


  private url: string = 'http://localhost:8080/auth';
  private userName: string;
  private password: string;


  constructor(private auth: AuthenticationService, private router: Router, private snacbkar: SnackbarService) {}

  

  logIn(){
    this.auth.postLogIn(this.userName, this.password).subscribe((res: Response) => {
      this.snacbkar.openSnackBar('User Successfully Logged In!');
      this.auth.logIn(res);
      sessionStorage.setItem('username', this.userName);
      this.router.navigate(['/']);
    })
  }

  logOut(){
    this.auth.logOut();
  }
}
