import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
  @Input() eventType: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  save() {
    this.activeModal.close();
  }

  close() {
    this.activeModal.close();
  }
}
