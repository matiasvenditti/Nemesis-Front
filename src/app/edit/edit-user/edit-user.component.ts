import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;

  userId: number;
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private userService: UserService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params.id;
    })
    this.userService.getUser().subscribe((res: User) => {
      this.user = res;
      this.name = res.name;
      this.username = res.username;
      this.surname = res.surname;
      this.email = res.email;
      this.password = res.password;
      this.confirmPassword = res.password;
    })
  }

  check(): string{
    if (this.confirmPassword != undefined && this.password != this.confirmPassword) return "active";
  }

  updateUser(){
    let user = new User(this.userId, this.name, this.surname, this.username, this.email, this.password, this.user.stores, this.user.products);
    this.userService.updateUser(user).subscribe(() => {
      this.location.back();
    });
  }

}
