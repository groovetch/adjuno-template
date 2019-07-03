import { Component } from '@angular/core';

import { MENU_ITEMS } from './main-menu';

@Component({
  selector: 'app-main',
  styleUrls: ['main.component.scss'],
  templateUrl: './main.component.html',
})
export class MainComponent {
  menu = MENU_ITEMS;
}
