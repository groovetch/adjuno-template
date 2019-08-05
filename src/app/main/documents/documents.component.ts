import { Component, OnInit } from '@angular/core';
import { DashboardDocument } from './document.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DocumentDialogComponent } from './document-dialog/document-dialog.component';

@Component({
  selector: 'ngx-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  listDocuments: Array<DashboardDocument> = [{
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date(),
    Suppliers: []
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date(),
    Suppliers: []
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date(),
    Suppliers: []
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date(),
    Suppliers: []
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date(),
    Suppliers: []
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date(),
    Suppliers: []
  }]
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewChecked() {
    $('.document-header').outerWidth($('.document-grid-contain').outerWidth());
  }

  onNewStoryBtnClick() {
    const modalRef = this.modalService.open(DocumentDialogComponent, { windowClass: 'document-dialog', beforeDismiss: () => {return false;}});
    modalRef.componentInstance.eventType = 'Add';

    modalRef.result.then((result) => {
      if(result) {
        this.listDocuments.push(result);
      }
    })
  }

  onEditBtnClick(document) {
    const modalRef = this.modalService.open(DocumentDialogComponent, { windowClass: 'document-dialog', beforeDismiss: () => {return false;}});
    modalRef.componentInstance.eventType = 'Edit';
    modalRef.componentInstance.document = document;

    modalRef.result.then((result) => {
      if(result) {
        this.listDocuments.push(result);
      }
    })
  }

}
