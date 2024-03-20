import { Component } from '@angular/core';
import { Contact } from './models/contact.model';
import { HttpClient } from '@angular/common/http';
import { contactsData } from '../../assets/contacts.mock';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})

export class ContactComponent {
  title = 'Contact';
  contacts: Contact[] = [];
 
  selectedContact: Contact;//this.contacts[0];

  constructor(private http: HttpClient) {
    this.http.get<Contact[]>('assets/contacts.json').subscribe((data:Contact[]) => {
      this.contacts = data;
    });
  }

  // onSelect(contact) {
  //   //this.selectedContact = contact;
  // }

  /*create displayUserDetail function to handle the click event on the user name*/
  displayUserDetail(contact: Contact) {
    this.selectedContact = contact;
    console.log(contact);
  }
}
