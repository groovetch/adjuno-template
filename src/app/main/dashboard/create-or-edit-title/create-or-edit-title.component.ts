import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { AppTitle } from '../app-title';

@Component({
  selector: 'ngx-create-or-edit-title',
  templateUrl: './create-or-edit-title.component.html',
  styleUrls: ['./create-or-edit-title.component.scss']
})
export class CreateOrEditTitleComponent implements OnInit {

  icons = [
    {
      "src": "news.svg",
      "id": 0,
    }, {
      "src": "contacts.svg",
      "id": 1,
    }, {
      "src": "user-link.svg",
      "id": 3,
    }, {
      "src": "document.svg",
      "id": 4
    }, {
      "src": "sample.svg",
      "id": 5
    }

  ];

  selectedIconId = 0;
  appTitle: AppTitle = new AppTitle();

  constructor(
    protected ref: NbDialogRef<CreateOrEditTitleComponent>
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.ref.close();
  }

  next() {
    if (this.selectedIconId === this.icons.length - 1) {
      this.selectedIconId = 0;
    } else {
      this.selectedIconId = this.selectedIconId + 1;
    }
  }

  prev() {
    if (this.selectedIconId === 0) {
      this.selectedIconId = this.icons.length - 1;
    } else {
      this.selectedIconId = this.selectedIconId - 1;
    }
  }

  create() {
    this.appTitle.icon = this.icons[this.selectedIconId].src;
    this.ref.close(this.appTitle);
  }
}
