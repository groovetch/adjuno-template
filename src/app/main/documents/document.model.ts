export class DashboardDocument {

  Attachments: any;
  //file size in kb
  FileSize: number;
  Description: string;
  DateAdded: Date;
  Suppliers: Array<DocumentSupplier>;

  constructor() {
    this.Attachments = '';
    this.FileSize = 0;
    this.DateAdded = new Date();
    this.Description = '';
    this.Suppliers = [];
  }
}

export class DocumentSupplier {
  Id: number;
  Name: string;
  AckReq: boolean;
}
