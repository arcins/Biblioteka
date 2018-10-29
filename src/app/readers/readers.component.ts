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

}
