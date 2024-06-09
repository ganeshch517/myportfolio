import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';

  @HostListener("window:scroll", []) onWindowScroll() {}

  ngOnInit(): void {
    AOS.init();
    //(document.body.style as any).zoom = "70%";
  }

  constructor(public spinnerService: SpinnerService) {}

  scrollToTopButtonVisible(): boolean {
    return window.scrollY > 100 ? true : false;
  }

  scrollToTop() {
    let ele = document.getElementById('backgroundImageId');
    let y = ele ? ele.getBoundingClientRect().top - 50 : 0;
    window.scrollTo({top: y, behavior: 'smooth'});
  }

}

