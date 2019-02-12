import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { CartItem } from '../../model/cart-item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  userId: number;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.userId = params['userId'];
    })
  }

  ngOnInit() {
    this.userService.getHistory(this.userId).subscribe((res: CartItem[]) => {
      console.table(res);
    })
  }

}
