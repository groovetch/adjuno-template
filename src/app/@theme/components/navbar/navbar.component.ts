import { Component, OnInit, Input } from '@angular/core';
import { NbSidebarService, NbMenuService, NbDialogService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService, LayoutService } from '../../../@core/utils';
import { NOTIFICATIONS } from './notifycation-item';
import { PreferenceComponent } from './preference/preference.component';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() position = 'normal';

  user = {
    username: 'Wayne.morgan@adjuno.com',
    avatar: 'assets/user-icon/avatar.svg',
  };

  notifications = NOTIFICATIONS;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService,
    private dialogService: NbDialogService) {
  }

  ngOnInit() {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }

  openPreference() {
    this.dialogService
      .open(PreferenceComponent, { closeOnBackdropClick: false });
  }

}
