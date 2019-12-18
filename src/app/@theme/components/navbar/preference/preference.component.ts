import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { FormControl } from '@angular/forms';
import { PreferenceObserver } from '../preferenceObserver';

@Component({
  selector: 'ngx-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  selectedTileSize: string;
  constructor(
    protected ref: NbDialogRef<PreferenceComponent>,
    private preferenceObser: PreferenceObserver
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.ref.close();
  }

  apply() {
    this.preferenceObser.setData(this.selectedTileSize);
    this.ref.close();
  }
}
