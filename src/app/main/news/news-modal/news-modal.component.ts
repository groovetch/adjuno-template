import { Component, OnInit, Input } from '@angular/core';
import { News } from '../news.model';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.scss']
})
export class NewsModalComponent implements OnInit {
  public Editor = ClassicEditor;
  @Input() public news: News;
  public editedModel: News;
  @Input() public eventType: string;
  public image1Url: any;
  public image2Url: any;
  public image3Url: any;
  public image4Url: any;
  public mockDataSupplier: Array<any>;

  //Form validation
  storyForm = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    suppliers: new FormControl('', Validators.required),
  });

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    if(this.news){
      this.editedModel = JSON.parse(JSON.stringify(this.news));
    }
    else{
      this.editedModel = new News();
    }

    this.mockDataSupplier = [
      { Id: 0, Value: 'supplier 1' },
      { Id: 1, Value: 'supplier 2' },
      { Id: 2, Value: 'supplier 3' },
      { Id: 3, Value: 'supplier 4' },
      { Id: 4, Value: 'supplier 5' },
      { Id: 5, Value: 'supplier 6' },
      { Id: 6, Value: 'supplier 7' }
    ];
  }

  openImageSelector(selectorId) {
    const mySelector = <HTMLElement>document.querySelector(`#${selectorId}`);

    mySelector.click();
  }

  preview(files, imageId) {
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = _event => {
      switch (imageId) {
        case 'image1':
          this.editedModel.Images[0] = reader.result;
          break;
        case 'image2':
          this.editedModel.Images[1] = reader.result;
          break;
        case 'image3':
          this.editedModel.Images[2] = reader.result;
          break;
        case 'image4':
          this.editedModel.Images[3] = reader.result;
          break;
      }
    };
  }

  removeImage(imageId, files) {
    files = null;
    switch (imageId) {
      case 'image1Url':
        this.editedModel.Images[0] = null;
        break;
      case 'image2Url':
        this.editedModel.Images[1] = null;
        break;
      case 'image3Url':
        this.editedModel.Images[2] = null;
        break;
      case 'image4Url':
        this.editedModel.Images[3] = null;
        break;
    }
  }

  onClickCheckboxSupplier(supplierId) {
    //if item is already in list => remove this item from list
    if (this.editedModel.Suppliers.indexOf(supplierId) != -1){
      this.editedModel.Suppliers = this.editedModel.Suppliers.filter(item => item !== supplierId);
    }
    //if item is not in list => add item to this list
    else{
      this.editedModel.Suppliers.push(supplierId);
    }

    //refresh active form validation
    const listSuppliersValid = this.editedModel.Suppliers.length > 0;
    if(listSuppliersValid){
      this.storyForm.controls['suppliers'].setErrors(null);
    }
    else{
      this.storyForm.controls['suppliers'].setErrors({notValid: true});
    }
  }

  selectAllSupplier() {
    if (this.editedModel.Suppliers && this.editedModel.Suppliers.length == this.mockDataSupplier.length){
      this.editedModel.Suppliers = [];
    }
    else{
      this.editedModel.Suppliers = this.mockDataSupplier.map(function(item){return item.Id});
    }
  }

  save() {
    //check validation status of list suppliers
    const listSuppliersValid = this.editedModel.Suppliers.length > 0;
    if(listSuppliersValid){
      this.storyForm.controls['suppliers'].setErrors(null);
    }
    else{
      this.storyForm.controls['suppliers'].setErrors({notValid: true});
    }

    //if data is valid => process save data
    if(this.storyForm.valid){
      this.editedModel.PublishedDate = new Date();
      this.activeModal.close(this.editedModel);
    }
    //if data is not valid => mark ass touched of all input
    else{
      Object.keys(this.storyForm.controls).forEach(key => {
        this.storyForm.controls[key].markAsTouched();
      });
      return;
    }
  }

  close(){
    this.activeModal.close();
  }
}
