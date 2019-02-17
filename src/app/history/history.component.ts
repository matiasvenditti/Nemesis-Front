import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { CartItem } from '../../model/cart-item';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from '../../model/purchase';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  userId: number;
  purchases: Purchase[] = [];
  currentPurchase: Purchase;
  username: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params['id'];
      this.username = sessionStorage.getItem('username');
    })
  }

  ngOnInit() {
    this.userService.getHistory(this.userId).subscribe((res: any[]) => {
      this.purchases = res;
    })
  }

  updateActualPurchase(index: number){
    this.currentPurchase = this.purchases[index];
  }

}
