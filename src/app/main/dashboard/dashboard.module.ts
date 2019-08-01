import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {
  NbCardModule,
  NbDialogModule,
  NbButtonModule,
  NbSelectModule
} from '@nebular/theme';
import { CreateOrEditTitleComponent } from './create-or-edit-title/create-or-edit-title.component';
import { FormsModule } from '@angular/forms';


const COMPONENT = [
  DashboardComponent,
  CreateOrEditTitleComponent,
];

const ENTRY_COMPONENTS = [
  CreateOrEditTitleComponent,
];

const MODULES = [
  CommonModule,
  DashboardRoutingModule,
  NbDialogModule.forChild(),
  NbCardModule,
  NbSelectModule,
  NbButtonModule,
  FormsModule,
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
