import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './useful-link-routing.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [...routedComponents, CardComponent],
  imports: [
    ThemeModule,
    TablesRoutingModule,
    CommonModule
  ]
})
export class UsefulLinkModule { }
