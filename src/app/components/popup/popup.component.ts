import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  
  @Input() title: any;
  @Input() message: any;
  @Input() isSuccess: any;

  constructor(public activeModal: NgbActiveModal) {}

}
