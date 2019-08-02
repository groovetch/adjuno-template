import { Component, OnInit } from '@angular/core';
import { DASHBOARD_ITEMS } from './dashboard-item';
import { NbDialogService } from '@nebular/theme';
import { CreateOrEditTitleComponent } from './create-or-edit-title/create-or-edit-title.component';
import { AppTile } from './app-tile';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: AppTile[] = DASHBOARD_ITEMS;
  constructor(
    private dialogService: NbDialogService
  ) { }

  ngOnInit() {
  }

  onCreateTitle() {
    this.dialogService
      .open(CreateOrEditTitleComponent, { closeOnBackdropClick: false })
      .onClose.subscribe(result => result && this.items.push(result));
  }

  redirect(link) {
    alert(link);
  }
}
