import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NbCardModule, NbDialogModule } from '@nebular/theme';
import { CreateOrEditContactComponent } from './create-or-edit-contact/create-or-edit-contact.component';

const ENTRY_COMPONENTS = [
  CreateOrEditContactComponent,
];

@NgModule({
  declarations: [
    ContactsComponent,
    CreateOrEditContactComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ContactsRoutingModule,
    NbCardModule,
    NbDialogModule.forChild(),
  ],
  entryComponents: [
    CreateOrEditContactComponent,
  ]
})
export class ContactsModule { }
