import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  private url: string = 'http://localhost:8080/user';
  private userName: string;
  private password: string;


  constructor(private auth: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.auth.login.subscribe();
  }

  logIn(){
    this.auth.postLogIn(this.url + '/login', this.userName, this.password)
      .subscribe((res: Response) => {
        this.auth.logIn(res)
        localStorage.setItem('username', this.userName)
        this.router.navigate(['/'])
      })
  }

  logOut(){
    this.auth.logOut();
  }
}
