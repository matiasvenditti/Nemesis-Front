import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../../../services/authentication.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  url: string = 'http://localhost:8080/user';
  @Input() user: User;

  constructor(private http: HttpClient, private login: AuthenticationService) { }

  ngOnInit() {
  }

  deleteUser(){
    var id = this.user.id;
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.login.getToken());
    const options = {
      headers: headers
    }
    this.http.delete(this.url + '/' + id, options).subscribe(() => this.login.logOut())
  }

}
