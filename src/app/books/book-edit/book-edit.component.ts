import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Books } from '../books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})


export class BookEditComponent implements OnInit {
  book: Books;
  id: number;
  category: {id: number, name: string}[];
  selectedValue: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private booksService: BooksService) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) this.book = this.booksService.getBook(this.booksService.findBookId(this.id));
      else this.book = new Books(null, '', '','', 0, '', false);
    // this.route.params
    //   .subscribe(
    //      (params: Params) => {
    //        this.book = this.booksService.getBook(+params['id']);
    //      }
    //   );
      this.category = this.booksService.getCategory();
      if (this.id) this.selectedValue = this.category[this.findCategoryId(this.book.category_id)].id;
        else this.selectedValue = 0;
  }

  findCategoryId(categoryId: number) {
    let j = this.category.map((e) => { return e.id; }).indexOf(categoryId);
    return j;
  }

  onSubmit(form) {
    if (this.id)
      this.booksService.editBooks(this.id, form.value);
      else this.booksService.addBooks(form.value);
    this.router.navigate(['/books']);
  }

}
