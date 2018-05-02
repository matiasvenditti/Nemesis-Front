import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window: scroll')
  scrollHandler(){
    var nav = document.getElementById("nav");
    var scroll = window.scrollY;
    var opacity = 2*scroll/window.innerHeight;
    nav.style.setProperty("opacity", "" + opacity);
  }

}
