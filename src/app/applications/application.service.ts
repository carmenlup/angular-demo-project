/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  selectedApplication = null;

  constructor(private http: HttpClient) { }

  getApplications(): Observable<any[]> {
    // replace with your API endpoint
    return this.http.get<any[]>('https://api.example.com/applications');
  }

  deleteApplication(application): Observable<any> {
    // replace with your API endpoint
    return this.http.delete(`https://api.example.com/applications/${application.id}`);
  }
}*/

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const APPLICATIONS_MOCK = [
  { id: 1, name: 'Application 1' },
  { id: 2, name: 'Application 2' },
  // add more applications as needed
];

const APPLICATION_DETAIL_MOCK = { id: 1, name: 'Application 1', description: 'This is application 1' };
const APPLICATION_DETAIL_MOCK_2 = { id: 2, name: 'Application 2', description: 'This is application 2' };

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
    selectedApplication: any;

    constructor() {
      this.selectedApplication = null;
    }

  getApplications(): Observable<any[]> {
    return of(APPLICATIONS_MOCK);
  }

  getApplicationDetail(id: number): Observable<any> {
    if(id === 1)
        return of(APPLICATION_DETAIL_MOCK);

    return of(APPLICATION_DETAIL_MOCK_2)
  }

  deleteApplication(application: any): Observable<any> {
    const index = APPLICATIONS_MOCK.findIndex(app => app.id === application.id);
    if (index !== -1) {
      APPLICATIONS_MOCK.splice(index, 1);
    }

    return of(APPLICATIONS_MOCK);
  }
}