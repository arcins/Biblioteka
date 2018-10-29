import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { ReadersComponent } from './readers/readers.component';
import { ReaderComponent } from './readers/reader/reader.component';
import { BorrowsComponent } from './borrows/borrows.component';
import { BorrowEditComponent } from './borrows/borrow-edit/borrow-edit.component';
import { ReaderEditComponent } from './readers/reader-edit/reader-edit.component';

import { BooksService } from './books/books.service';
import { ReadersService } from './readers/readers.service';

const appRoutes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'books', component: BooksComponent },
  { path: 'book/edit', component: BookEditComponent },
  { path: 'book/:id', component: BookComponent },
  { path: 'book/:id/edit', component: BookEditComponent },
  { path: 'readers', component: ReadersComponent },
  { path: 'reader/add', component: ReaderEditComponent },
  { path: 'reader/:id', component: ReaderComponent },
  { path: 'borrows', component: BorrowsComponent },
  { path: 'borrow', component: BorrowEditComponent }
 ];

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
    BorrowEditComponent,
    ReaderEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BooksService, ReadersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
