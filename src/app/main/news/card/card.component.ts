import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewsModalComponent } from '../news-modal/news-modal.component';

@Component({
  selector: 'ngx-news-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() news: News;
  @Input() cardId: number;
  textContainerId: string;
  isExpanded: boolean = false;
  isExceedLineLimit: boolean = false;

  constructor( private modalService: NgbModal) {}

  ngOnInit() {
    this.textContainerId = `text-container-${this.cardId}`;
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewChecked() {
    const myTextcontainer = <HTMLElement>(
      document.querySelector(`#${this.textContainerId}`)
    );
    this.isExceedLineLimit = myTextcontainer.offsetHeight / 22 > 3;
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngAfterViewInit() {}

  expandBtnClick() {
    this.isExpanded = !this.isExpanded;
  }

  onEditBtnClick() {
    const modalRef = this.modalService.open(NewsModalComponent, { size: 'lg' });
    modalRef.componentInstance.news = this.news;

    modalRef.result.then((result) => {
      if(result) {
        this.news = result;
      }
    })
  }
}
