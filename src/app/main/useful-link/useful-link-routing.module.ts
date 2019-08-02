import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsefulLinkComponent } from './useful-link.component';

const routes: Routes = [{
  path: '',
  component: UsefulLinkComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class TablesRoutingModule { }

export const routedComponents = [
  UsefulLinkComponent
];
