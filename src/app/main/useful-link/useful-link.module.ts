import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './useful-link-routing.module';
import { CardComponent } from './card/card.component';
import { UsefulLinkModalComponent } from './useful-link-modal/useful-link-modal.component';
import { NbInputModule, NbCheckboxModule, NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [...routedComponents, CardComponent, UsefulLinkModalComponent],
  imports: [
    ThemeModule,
    TablesRoutingModule,
    CommonModule,
    NbInputModule,
    NbCheckboxModule,
    
    NbDialogModule.forChild()
  ],
  entryComponents: [UsefulLinkModalComponent]
})
export class UsefulLinkModule { }
