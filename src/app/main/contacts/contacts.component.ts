import { Component, OnInit } from '@angular/core';
import { CONTACTS } from './contacts-model/contacts-mock';
import { NbDialogService } from '@nebular/theme';
import { CreateOrEditContactComponent } from './create-or-edit-contact/create-or-edit-contact.component';

@Component({
  selector: 'ngx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts = CONTACTS;

  constructor(
    private dialogService: NbDialogService
  ) { }

  ngOnInit() {
  }

  onAddNewContactClicked() {
    this.dialogService
      .open(CreateOrEditContactComponent, { closeOnBackdropClick: false });
  }
}
