import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-details-popup',
  templateUrl: './project-details-popup.component.html',
  styleUrls: ['./project-details-popup.component.scss']
})
export class ProjectDetailsPopupComponent {
  
  @Input() title: any;
  @Input() imageURL: any;
  @Input() description: any;
  @Input() technologiesUsed: any;

  constructor(public activeModal: NgbActiveModal) {}
}
