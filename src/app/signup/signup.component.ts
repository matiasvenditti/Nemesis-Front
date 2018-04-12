import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class InputElement {
  constructor(public title: string, public type: string) {}
}

export class ButtonElement {
  constructor(public name: string, public func) {}
}

export class Elements {
  constructor(public inputs, public buttons) {}
}