import { Component, OnInit } from '@angular/core';
import { DashboardDocument } from './document.model';

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
    DateAdded: new Date()
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date()
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date()
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date()
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date()
  },
  {
    Attachments : './assets/images/camera1.jpg',
    FileSize: 1024,
    Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
    DateAdded: new Date()
  }]
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewChecked() {
    $('.document-header').outerWidth($('.document-grid-contain').outerWidth());
  }

}
