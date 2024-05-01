import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  
  dateTimeInterval: any = null;
  dateTimeString: string = new Intl.DateTimeFormat('en-GB', {day: '2-digit', year: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(new Date());;

  public scorllToPortfolio() {
      document.getElementById('projectsTitleId')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  public scorllToHome() {
    document.getElementById('backgroundImageId')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  public scorllToAbout() {
    document.getElementById('aboutMeId')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }


  public scorllToContactForm() {
    document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit(): void {
    this.showCurrentDateTime();
  }

  showCurrentDateTime() {
    this.dateTimeInterval = setInterval(() => {
      let currentDate = new Date();
      this.dateTimeString = new Intl.DateTimeFormat('en-GB', {day: '2-digit', year: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(currentDate);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.dateTimeInterval);
  }

  
}
