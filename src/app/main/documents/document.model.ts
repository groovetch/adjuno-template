export class DashboardDocument {

  Attachments: string;
  //file size in kb
  FileSize: number;
  Description: string;
  DateAdded: Date;

  constructor() {
    this.Attachments = '';
    this.FileSize = 0;
    this.DateAdded = new Date();
    this.Description = '';
  }
}
