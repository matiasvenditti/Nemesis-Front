import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged: boolean = false;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    this.logged = this.auth.isLoggedIn();
  }

}
