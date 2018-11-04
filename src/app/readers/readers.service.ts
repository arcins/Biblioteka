import { Readers } from './readers.model'

export class ReadersService {
  private readers: Readers[] = [
    new Readers(0, 'Juliusz', 'Słowacki', []),
    new Readers(1, 'Adam', 'Mickiewicz',
      [
        {book_id: 1, when: '2018-06-14', toWhen: '2018-12-11'},
        {book_id: 2, when: '2018-06-14', toWhen: '2018-11-11'}]),
    new Readers(2, 'Adam', 'Asnyk', [])
];

  constructor() { };

  getReaders() {
    return this.readers;
  }


}
