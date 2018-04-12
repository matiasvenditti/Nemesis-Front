import { Component, OnInit } from '@angular/core';
import { InputElement, Elements, ButtonElement } from '../../signup/signup.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  inputs;
  private username: string;
  private password: string;

  constructor() { }

  ngOnInit() {
    this.inputs = new Elements([new InputElement('Username', 'text'), 
    new InputElement('Password', 'password'), 
    new InputElement('Username', 'text'),], 
    [new ButtonElement('Submit', () => console.log('hello'))]);
  }

  logIn(){
    console.log(this.username, this.password);
    
  }

}
