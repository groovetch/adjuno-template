import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
