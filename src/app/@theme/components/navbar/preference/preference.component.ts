import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  constructor(
    protected ref: NbDialogRef<PreferenceComponent>
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.ref.close();
  }

  apply() {
  }
}
