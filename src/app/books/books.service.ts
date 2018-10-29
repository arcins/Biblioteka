import { Books } from './books.model';


export class BooksService {
  private category: {id: number, name: string}[]
    = [{id: 1, name: 'powieść'},
       {id: 2, name: 'poradniki'},
       {id: 3, name: 'dla dzieci'}];

  //todo: books loaded by json
  private books: Books[] = [
    new Books(0, 'Przygody Tomka Sawyera', 'Mark Twain',
              '000-00-000-0000-0', 1, 'opis', false),
    new Books(1, 'Zwierzęta i zwierzątka', 'Dmitroca Zbigniew',
              '000-00-000-0000-0', 3, 'opis', true),
    new Books(2, 'Gotowanie krok po kroku. Ciasta i desery',
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
      // nowyKomentarz(id, komentarz) {
    //   for (var i = this.sprzet.length - 1; i >= 0; --i) {
    //     if (this.sprzet[i].id == id) {
    //       this.sprzet[i].komentarze.push(komentarz);
    //     }
    //   }
    // }
    //
    // usunSprzet(doUsunieciaIdSprzet: number) {
    //   for (var i = this.sprzet.length - 1; i >= 0; --i) {
    //     if (this.sprzet[i].id == doUsunieciaIdSprzet) {
    //       this.sprzet.splice(i,1);
    //     }
    //   }
    // }
    //
    // edytujSprzet(id, form) {
    //   for (var i = this.sprzet.length - 1; i >= 0; --i) {
    //     if (this.sprzet[i].id == id) {
    //       this.sprzet[i].nazwa = form.nazwa;
    //       this.sprzet[i].idKategorii = form.kategoria;
    //       this.sprzet[i].status = form.status;
    //     }
    //   }
    // }
    //
    // dodajSprzet(form) {
    //   let tmpId = 0;
    //   for (var i = this.sprzet.length - 1; i >= 0; --i) {
    //     if (this.sprzet[i].id > tmpId) {
    //       tmpId=this.sprzet[i].id+1;
    //       console.log(tmpId);
    //     }
    //   }
    //   this.sprzet.push(new Sprzet(tmpId, form.nazwa, form.kategoria, form.status, [], []));
    // }
  }
