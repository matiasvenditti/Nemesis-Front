import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  url: string = 'http://localhosto:8080/profile';

  constructor(private http: HttpClient, private login: AuthenticationService) { }

  ngOnInit() {
  }

  deleteUser(){
    var id = localStorage.getItem('id');
    this.http.delete(this.url + '/' + id).subscribe(() => this.login.logOut());
  }

}
