import { Component, OnInit } from '@angular/core';
import { DASHBOARD_ITEMS } from './dashboard-item';
import { NbDialogService } from '@nebular/theme';
import { CreateOrEditTitleComponent } from './create-or-edit-title/create-or-edit-title.component';
import { AppTile } from './app-tile';
import { PreferenceObserver } from '../../@theme/components/navbar/preferenceObserver';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  items: AppTile[] = DASHBOARD_ITEMS;
  tileSize: string;
  constructor(
    private dialogService: NbDialogService,
    private preferenceObser: PreferenceObserver
  ) {
    this.preferenceObser.dataChange.subscribe((data) => {
      this.tileSize = data;
    });
  }

  ngOnInit() {
    this.tileSize = 'large';
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
