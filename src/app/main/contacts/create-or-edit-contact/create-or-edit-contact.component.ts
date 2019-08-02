import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { ContactSuppliers } from '../contacts-model/contacts-suppliers';

@Component({
  selector: 'ngx-create-or-edit-contact',
  templateUrl: './create-or-edit-contact.component.html',
  styleUrls: ['./create-or-edit-contact.component.scss']
})
export class CreateOrEditContactComponent implements OnInit {
  public mockDataSupplier: Array<any>;
  public editedModel: ContactSuppliers;

  constructor(
    protected ref: NbDialogRef<CreateOrEditContactComponent>
  ) { }

  ngOnInit() {
    this.editedModel = new ContactSuppliers();

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

  cancel() {
    this.ref.close();
  };

  save() {
    this.ref.close();
  };

  selectAllSupplier() {
    if (this.editedModel.Suppliers && this.editedModel.Suppliers.length == this.mockDataSupplier.length){
      this.editedModel.Suppliers = [];
    }
    else{
      this.editedModel.Suppliers = this.mockDataSupplier.map(function(item){return item.Id});
    }
  }
}
