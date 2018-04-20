import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  providers: [AuthenticationService],
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  private url: string = 'http://localhost:8080';
  private email: string;
  private password: string;

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {
  }

  logIn(form: NgForm){
    console.log(form);
    this.auth.postLogIn(this.url + '/auth', this.email, this.password)
      .subscribe((res: Response) => this.auth.logIn(res));
  }
}
