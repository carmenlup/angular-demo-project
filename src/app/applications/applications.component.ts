
import { Component } from '@angular/core';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.css'
})
export class ApplicationsComponent {
  applications = [];

  // add selected application 
  selectedApplication = null;

  constructor(private applicationService: ApplicationService) {
    this.applications.push(this.applicationService.getApplications());
    this.refreshApplications();
  }

  refreshApplications() {
    this.applicationService.getApplications().subscribe(applications => {
      this.applications = applications;
    });
  }

  selectApplication(application) {
    this.applicationService.selectedApplication = application;
  }

  deleteApplication(application) {
    this.applicationService.deleteApplication(application).subscribe(() => {
      this.refreshApplications();
    });
  }

  // implement displayApplicationDetail function to handle the click event on the application name
  // foreach application in applications, if application.id === id, then set selectedApplication to application
  getApplicationDetail(application) {
    this.applicationService.getApplicationDetail(application.id).subscribe((data) => {
      this.selectedApplication = data;
    });
    //console.log(this.selectedApplication);
  }  

  // how should I reflect the selected application in the application-detail component to show the proper app detail?
  // use the application service to set the selected application and then use the application service to get the selected application in the application-detail component
  // the application-detail component should use the application service to get the 
  // selected application and display the details of the selected application
  


}