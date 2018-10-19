import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { ReadersComponent } from './readers/readers.component';
import { ReaderComponent } from './readers/reader/reader.component';
import { BorrowsComponent } from './borrows/borrows.component';
import { BorrowEditComponent } from './borrows/borrow-edit/borrow-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookComponent,
    BookEditComponent,
    ReadersComponent,
    ReaderComponent,
    BorrowsComponent,
    BorrowEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
