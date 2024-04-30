import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public isSpinnerVisible: boolean;

  constructor() { 
    this.isSpinnerVisible = false;
  }

  hideSpinner() {
    this.isSpinnerVisible = false;
  }

  showSpinner() {
    this.isSpinnerVisible = true;
  }

}
