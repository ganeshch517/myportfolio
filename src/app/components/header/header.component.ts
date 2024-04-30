import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public scorllToPortfolio() {
      document.getElementById('projectsTitleId')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // let ele = document.getElementById('projectsTitleId');
      // let y = ele ? ele.getBoundingClientRect().top - 50 : 0;
      // window.scrollTo({top: y, behavior: 'smooth'});
  }
  
  public scorllToHome() {
    document.getElementById('backgroundImageId')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  public scorllToContactForm() {
    document.getElementById('contactForm')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  
}
