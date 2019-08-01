import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-create-or-edit-contact',
  templateUrl: './create-or-edit-contact.component.html',
  styleUrls: ['./create-or-edit-contact.component.scss']
})
export class CreateOrEditContactComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<CreateOrEditContactComponent>
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.ref.close();
  }
}
