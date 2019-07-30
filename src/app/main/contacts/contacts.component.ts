import { Component, OnInit } from '@angular/core';
import { CONTACTS } from './contacts-model/contacts-mock';

@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;

  constructor() { }

  ngOnInit() {
  }

}
