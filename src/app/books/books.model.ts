export class Books {
  public id: number;
  public title: string;
  public author: string;
  public isbn: string;
  public category_id: number;
  public description: string;
  public status: boolean;

  constructor(id: number,
              title: string,
              author: string,
              isbn: string,
              category_id: number,
              description: string,
              status: boolean)  {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.category_id = category_id;
    this.description = description;
    this.status = status;
  }
}
