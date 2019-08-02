import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './documents-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    CKEditorModule
  ],
  declarations: [
    ...routedComponents,
    DocumentDialogComponent,
  ],
  entryComponents: [DocumentDialogComponent]
})
export class DocumentsModule {}
