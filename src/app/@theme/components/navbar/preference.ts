import {Observable, Observer} from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class PreferenceObserver {
  tileSize: string;
  dataChange: Observable<any>;
  dataChangeObserver: Observer<any>;

  constructor() {
    this.dataChange = new Observable((observer: Observer<any>) => {
      this.dataChangeObserver = observer;
    });
  }

  setData(data: string) {
    this.tileSize = data;
    this.dataChangeObserver.next(this.tileSize);
  }
}
