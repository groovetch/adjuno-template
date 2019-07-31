import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-card-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() images: Array<string>;

  constructor() {}

  ngOnInit() {
    this.images = this.images.filter(x => x.length > 0);
  }
}
