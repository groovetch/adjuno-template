import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NewsModule } from './news/news.module';
import { UsefulLinkModule } from './useful-link/useful-link.module';

const MAIN_COMPONENTS = [MainComponent];

@NgModule({
  imports: [MainRoutingModule, ThemeModule, MiscellaneousModule, NewsModule, UsefulLinkModule],
  declarations: [...MAIN_COMPONENTS]
})
export class MainModule {}
