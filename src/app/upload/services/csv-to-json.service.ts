import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import {
  camelize,
  removeNullables,
} from 'src/app/common/helpers/stringUtility';
import { GoodreadsBookEntry } from 'src/app/common/types/goodreads-types';

@Injectable({
  providedIn: 'root',
})
export class CsvToJsonService {
  private papa: Papa<GoodreadsBookEntry>;
  constructor() {
    this.papa = new Papa<GoodreadsBookEntry>();
  }

  parseGoodreadsData(csvData: string) {
    return this.papa.parse(csvData, {
      header: true,
      transformHeader: (str) => camelize(removeNullables(str)),
      dynamicTyping: true,
    });
  }
}
