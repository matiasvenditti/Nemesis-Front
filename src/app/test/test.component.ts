import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

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
