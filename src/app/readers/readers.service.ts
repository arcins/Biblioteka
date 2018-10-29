import { Readers } from './readers.model'

export class ReadersService {
  private readers: Readers[] = [
    new Readers(0, 'Juliusz', 'Słowacki'),
    new Readers(1, 'Adam', 'Mickiewicz'),
    new Readers(2, 'Adam', 'Asnyk')
];

  constructor() { };

  getReaders() {
    return this.readers;
  }
}
