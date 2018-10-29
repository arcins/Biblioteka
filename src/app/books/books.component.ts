import { Component, OnInit } from '@angular/core';

import { Books } from './books.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Books[];
  category: {id: number, name: string}[];

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
    this.category = this.booksService.getCategory();
  }

  findCategoryName(categoryId: number) {
    let j = this.category.map((e) => { return e.id; }).indexOf(categoryId);
    return this.category[j].name;
  }
}
