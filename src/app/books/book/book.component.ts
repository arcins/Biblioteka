import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Books } from '../books.model';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Books;
  id: number;
  category: {id: number, name: string}[];

  constructor(private route: ActivatedRoute,
              private booksService: BooksService) { }

  ngOnInit() {
    this.route.snapshot.queryParams;
    this.id = +this.route.snapshot.params['id'];
    this.book = this.booksService.getBook(this.id);
    this.category = this.booksService.getCategory();
  }

  findCategoryName(categoryId: number) {
    let j = this.category.map((e) => { return e.id; }).indexOf(categoryId);
    return this.category[j].name;
  }

}
