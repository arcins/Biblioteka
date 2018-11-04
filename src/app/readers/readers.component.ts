import { Component, OnInit } from '@angular/core';

import { Readers } from './readers.model';
import { ReadersService } from './readers.service';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {
  readers: Readers[];

  constructor(private readersService: ReadersService) { }

  ngOnInit() {
    this.readers = this.readersService.getReaders();
  }

  howMuchBorrows(userId: number) {
    let borrow = 0;

    this.readers[userId].borrows.length;
    return this.readers[userId].borrows.length;
  }

  whenDelayed(userId: number) {
    if (this.howMuchBorrows(userId)) {
        let data = '999999999999';
        for (let i=0; i<this.readers[userId].borrows.length; i++)
          {
            if (data > this.readers[userId].borrows[i].toWhen)
              data = this.readers[userId].borrows[i].toWhen;
          }
        return data;
      };
  }

}
