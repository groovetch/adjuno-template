import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DashboardDocument } from '../document.model';

@Component({
  selector: 'ngx-document-dialog',
  templateUrl: './document-dialog.component.html',
  styleUrls: ['./document-dialog.component.scss']
})
export class DocumentDialogComponent implements OnInit {
  public mockDataSupplier: Array<any> = [
    { Id: 0, Name: 'Supplier 1', AckReq: false },
    { Id: 1, Name: 'Supplier 2', AckReq: false },
    { Id: 2, Name: 'Supplier 3', AckReq: false },
    { Id: 3, Name: 'Supplier 4', AckReq: false }
  ];

  @ViewChild('fileInput') myInputVariable: ElementRef;
  @Input() eventType: string;
  @Input() document: DashboardDocument;
  editedDocument: DashboardDocument;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if(!this.document) {
      this.editedDocument = new DashboardDocument();
    }
    else {
      this.editedDocument = JSON.parse(JSON.stringify(this.document));
    }
  }

  save() {
    this.activeModal.close();
  }

  close() {
    this.activeModal.close();
  }

  openImageSelector() {
    const mySelector = <HTMLElement>document.querySelector(`#documentInput`);

    mySelector.click();
  }

  removeAttachment() {
    this.myInputVariable.nativeElement.value = '';
    this.editedDocument.Attachments = null;
    this.editedDocument.FileSize = 0;
  }

  preview(files) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      this.editedDocument.Attachments = reader.result;
    };
  }

}
