import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  url: string = 'http://localhost:8080/user';
  @Input() user: User;

  constructor(private login: AuthenticationService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  deleteUser(){
    this.userService.deleteUser(this.user.id).subscribe(() => {
      this.login.logOut();
    })
  }

  getData(): string{
    return `${this.capitalize(this.user.name)} ${this.capitalize(this.user.surname)}`;
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  logOut(){
    this.login.logOut();
  }

  userSettings(){
    this.router.navigate([`edit/user/${this.user.id}`]);
  }

  cart(){
    this.router.navigate(['/cart']);
  }

}
