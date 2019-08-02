import { Component, OnInit, Input } from '@angular/core';
import { UsefulLink } from '../useful-link.model';
import { NbDialogRef } from '@nebular/theme'

@Component({
  selector: 'ngx-useful-link-modal',
  templateUrl: './useful-link-modal.component.html',
  styleUrls: ['./useful-link-modal.component.scss']
})
export class UsefulLinkModalComponent implements OnInit {
  @Input() public Links: UsefulLink;
  @Input() public eventType: string;

  constructor(protected ref: NbDialogRef<UsefulLinkModalComponent>) { }

  ngOnInit() {
  }

  close(){
    this.ref.close();
  }
}
