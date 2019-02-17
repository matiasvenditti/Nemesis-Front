import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  url: string = "http://localhost:8080";

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  check(): string{
    if (this.confirmPassword != undefined && this.password != this.confirmPassword) return "active";
  }

  signUp(){
    this.auth.signUp(this.name, this.surname, this.username, this.email, this.password).subscribe(() => {
      this.auth.postLogIn(this.username, this.password).subscribe((res: Response) => {
        this.auth.logIn(res)
        sessionStorage.setItem('username', this.username);
        this.router.navigate(['/'])
      })
    });
  }

}
