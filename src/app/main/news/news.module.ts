import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './news-routing.module';
import { CardComponent } from './card/card.component';
import { ImagesComponent } from './images/images.component';
import { NewsModalComponent } from './news-modal/news-modal.component';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ...routedComponents,
    CardComponent,
    ImagesComponent,
    NewsModalComponent
  ],
  entryComponents: [NewsModalComponent]
})
export class NewsModule {}
