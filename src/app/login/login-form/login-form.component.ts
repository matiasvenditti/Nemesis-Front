import { Component, OnInit } from '@angular/core';
import { InputElement, Elements, ButtonElement } from '../../signup/signup.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  inputs;
  private email: string;
  private password: string;

  constructor() { }

  ngOnInit() {
  }

  logIn(form: NgForm){
    console.log(this.email, this.password);
    console.log(form);
    
  }

}
