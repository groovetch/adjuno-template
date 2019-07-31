import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NbCardModule } from '@nebular/theme';


const COMPONENT = [
  DashboardComponent,
];

const ENTRY_COMPONENTS = [
];

const MODULES = [
  CommonModule,
  DashboardRoutingModule,
  NbCardModule,
];

@NgModule({
  declarations: [
    ...COMPONENT,
  ],
  imports: [
    ...MODULES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ]
})
export class DashboardModule { }
