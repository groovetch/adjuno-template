import { Component, OnInit, Input } from '@angular/core';
import { UsefulLink } from '../useful-link.model'

@Component({
  selector: 'ngx-usefullink-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() usefulLinks: UsefulLink;
  @Input() cardId: number;
  textContainerId: string;


  constructor() { }

  ngOnInit() {
    this.textContainerId = `text-container-${this.cardId}`;
  }

}
