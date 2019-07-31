export class News {
  Images: Array<any>;
  Title: string;
  PostedBy: string;
  PublishedDate: Date;
  Content: string;
  Suppliers: Array<number>;

  constructor() {
    this.Suppliers = [];
    this.Images = [];
    this.Title = '';
    this.PostedBy = '';
    this.PublishedDate = new Date();
    this.Content = '';
  }
}
