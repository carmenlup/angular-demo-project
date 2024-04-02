import { Component, Input } from '@angular/core';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-application-detail',
  templateUrl: './application-detail.component.html',
  styleUrl: './application-detail.component.css'
})
export class ApplicationDetailComponent {
  @Input() application: any; // This property will hold the data passed from the parent component
  applicationDetail: any;
  constructor(public applicationService: ApplicationService) { 
    this.applicationDetail = applicationService.selectedApplication
  }

  editApplication() {
    // implement your edit functionality here
  }
}
