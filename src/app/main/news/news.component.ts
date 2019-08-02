import { Component, OnInit } from '@angular/core';
import { News } from './news.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsModalComponent } from './news-modal/news-modal.component';

@Component({
  selector: 'ngx-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  data: Array<News> = [
    {
      Title: 'Test Title 1',
      Content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      PublishedDate: new Date(),
      Images: ['./assets/images/camera1.jpg'],
      PostedBy: 'Hoang Ha',
      Suppliers: [0, 1]
    },
    {
      Title: 'Test Title 2',
      Content:
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      PublishedDate: new Date(),
      Images: ['./assets/images/camera1.jpg', './assets/images/camera2.jpg'],
      PostedBy: 'Hoang Ha',
      Suppliers: [1, 2]
    },
    {
      Title: 'Test Title 3',
      Content:
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum`,
      PublishedDate: new Date(),
      Images: [
        './assets/images/camera1.jpg',
        './assets/images/camera2.jpg',
        './assets/images/camera3.jpg'
      ],
      PostedBy: 'Hoang Ha',
      Suppliers: []
    },
    {
      Title: 'Test Title 4',
      Content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
      PublishedDate: new Date(),
      Images: [
        './assets/images/camera1.jpg',
        './assets/images/camera2.jpg',
        './assets/images/camera3.jpg',
        './assets/images/camera4.jpg'
      ],
      PostedBy: 'Hoang Ha',
      Suppliers: []
    },
    {
      Title: 'Test Title 5',
      Content:
        `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum`,
      PublishedDate: new Date(),
      Images: [],
      PostedBy: 'Hoang Ha',
      Suppliers: []
    }
  ];
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  onNewStoryBtnClick() {
    const modalRef = this.modalService.open(NewsModalComponent, { size: 'lg' });
    modalRef.componentInstance.eventType = 'Add';

    modalRef.result.then((result) => {
      if(result) {
        this.data.push(result);
      }
    })
  }
}
