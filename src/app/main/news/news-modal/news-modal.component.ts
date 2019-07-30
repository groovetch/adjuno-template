import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.scss']
})
export class NewsModalComponent implements OnInit {
  public Editor = ClassicEditor;
  @Input() public news: News;
  @Input() public eventType: string;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
