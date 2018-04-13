import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  username: string;
  name: string;
  surname: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  signUp(form: NgForm){
    console.log(form);
  }

}
