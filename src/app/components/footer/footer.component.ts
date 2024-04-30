import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  constructor() {}
  
  _LINKEDIN_URL: string = `https://www.linkedin.com/in/ganeshch971/`;
  _NAUKRI_URL: string = `https://www.naukri.com/mnjuser/profile?id=&altresid`;

  openLinkedInInNewTab() {
    window.open(this._LINKEDIN_URL, '_blank');
  }

  openNaukriInInNewTab() {
    window.open(this._NAUKRI_URL, '_blank');
  }
  
}
