import { Component, OnInit, Input } from '@angular/core';
import { UsefulLink } from '../useful-link.model'

@Component({
  selector: 'ngx-usefullink-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() usefulLinks: UsefulLink;
  textContainerId: string;


  constructor() { }

  ngOnInit() {
  }

}
