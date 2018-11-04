export class Readers {
  public id: number;
  public firstName: string;
  public surname: string;
  public borrows: {book_id: number, when: string, toWhen: string}[];

  constructor(id: number,
              firstName: string,
              surname: string,
              borrows: {book_id: number, when: string, toWhen: string}[])  {
    this.id = id;
    this.firstName = firstName;
    this.surname = surname;
    this.borrows = borrows;
  }
}
