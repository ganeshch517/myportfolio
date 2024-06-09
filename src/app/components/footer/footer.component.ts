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
  myEmail: string = `ganeshch0931@gmail.com`;
  emailAddress: string = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${this.myEmail}&tf=1`;

  fullYear: number = new Date().getFullYear();

  openLinkedInInNewTab() {
    window.open(this._LINKEDIN_URL, '_blank');
  }

  openNaukriInInNewTab() {
    window.open(this._NAUKRI_URL, '_blank');
  }

  openEmailWindow() {
    window.open(this.emailAddress, '_blank');
  }

}
