import { Books } from './books.model';


export class BooksService {
  private category: {id: number, name: string}[]
    = [{id: 0, name: 'brak'},
       {id: 1, name: 'powieść'},
       {id: 2, name: 'poradniki'},
       {id: 3, name: 'dla dzieci'}];

  //todo: books loaded by json
  private books: Books[] = [
    new Books(5, 'Przygody Tomka Sawyera', 'Mark Twain',
              '000-00-000-0000-0', 1, 'opis', false),
    new Books(6, 'Zwierzęta i zwierzątka', 'Dmitroca Zbigniew',
              '000-00-000-0000-0', 3, 'opis', true),
    new Books(7, 'Gotowanie krok po kroku. Ciasta i desery',
              'Magnier-Moreno Marianne', '000-00-000-0000-0', 2, 'opis', false)
  ];

  constructor() { }

  getBooks() {
    return this.books;
    }

  getBook(id: number) {
    return this.books[id];
    }

  getCategory() {
    return this.category;
  }

  editBooks(id, form) {
    id = this.findBookId(id);
    this.books[id].title=form.title;
    this.books[id].author=form.author;
    this.books[id].category_id=form.category_id;
    this.books[id].isbn=form.isbn;
    this.books[id].description=form.description;
  }

  addBooks(form) {
    let tmpId = this.findLastBookId();
    this.books.push(
      new Books(
        tmpId,
        form.title,
        form.author,
        form.isbn,
        form.category_id,
        form.description,
        false
      )
    );
  }

  deleteBook(id) {
    for (var i = this.books.length - 1; i >= 0; --i) {
      if (this.books[i].id == id) {
        this.books.splice(i,1);
      }
    }
  }

  findLastBookId() {
    let tmpId = 0;
    for (var i = this.books.length - 1; i >= 0; --i) {
      if (this.books[i].id > tmpId) {
        tmpId=this.books[i].id+1;
        console.log(tmpId);
      }
    }
    return tmpId;
  }

  findBookId(id: number) {
    let j = this.books.map((e) => { return e.id; }).indexOf(id);
    return j;
  }



}
