import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const MAIN_COMPONENTS = [
  MainComponent,
];

@NgModule({
  imports: [
    MainRoutingModule,
    ThemeModule
  ],
  declarations: [
    ...MAIN_COMPONENTS,
  ],
})
export class MainModule {
}
