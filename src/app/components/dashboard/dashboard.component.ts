import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import Projects, { IProject } from '../projects';
import { ProjectDetailsPopupComponent } from '../project-details-popup/project-details-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  contactForm: FormGroup;
  myProjects: IProject[] = [];
  
  constructor(private modalService: NgbModal, 
    private builder: FormBuilder,
    private emailService: EmailService) {
      
    this.contactForm = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    });
  }

  onSubmit(value: any) {
    console.log(new Date().getSeconds());
    this.emailService.sendEmail(this.contactForm.value).subscribe((response: any) => {
      if(response.ok) {
        this.showPopup(true);
        document.getElementById("reset")?.click();
      }
    }, (failed: any) => {
      if(failed.ok === false) {
        this.showPopup(false);
      }
    });
  }

  showPopup(isSuccess: boolean) {
    let modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      animation: true
    }
		let modalRef = this.modalService.open(PopupComponent, modalOptions);
    modalRef.componentInstance.title = isSuccess ? 'Success' : 'Fail';
    modalRef.componentInstance.message =  isSuccess ? 'Email sent successfully. Thanks for contacting me 😊' : 'Email failed to send... Please try again! 🙂';
    modalRef.componentInstance.isSuccess = isSuccess ? true : false;

    setTimeout(() => {
      if(modalRef) {
        modalRef.close();
      }
    }, 5000);
	}

  ngOnInit(): void {
    this.myProjects = new Projects().projects;
  }

  displayProjectDetails(projectDetails: any) {
    let modalOptions: NgbModalOptions = {
      backdrop: 'static',
      keyboard: true,
      animation: true,
      windowClass: 'popupClass'
    }
    let projectDetailsModalRef = this.modalService.open(ProjectDetailsPopupComponent, modalOptions);
    projectDetailsModalRef.componentInstance.title = projectDetails.title;
    projectDetailsModalRef.componentInstance.imageURL = projectDetails.bannerImageURL;
    projectDetailsModalRef.componentInstance.description = projectDetails.description;
    projectDetailsModalRef.componentInstance.technologiesUsed = projectDetails.technologiesUsed;
  }

  openResumeInNewTab() {
    window.open(`https://drive.google.com/file/d/156ZjGwzUGd9WKAIeLolT2HLOmHmaUqLZ/view?usp=drive_link`, '_blank');
  }

}
