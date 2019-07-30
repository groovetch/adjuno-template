import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { NbCardModule } from '@nebular/theme';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ContactsRoutingModule,
    NbCardModule
  ]
})
export class ContactsModule { }
