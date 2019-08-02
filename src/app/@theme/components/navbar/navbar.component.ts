import { Component, OnInit, Input } from '@angular/core';
import { NbSidebarService, NbMenuService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService, LayoutService } from '../../../@core/utils';
import { NOTIFICATIONS } from './notifycation-item';

@Component({
  selector: 'ngx-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() position = 'normal';

  user = {
    username: 'Khang Tran',
    avatar: 'assets/user-icon/avatar.svg',
  };

  notifications = NOTIFICATIONS;

  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private layoutService: LayoutService) {
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

}
