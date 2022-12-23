import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Papa } from 'ngx-papaparse';
import { Observable, Subject } from 'rxjs';
import {
  camelize,
  removeNullables,
} from 'src/app/common/helpers/stringUtility';
import { GoodreadsBookEntry } from 'src/app/common/types/goodreads-types';

@Injectable({
  providedIn: 'root',
})
export class CsvToJsonService {
  private papa: Papa<GoodreadsBookEntry[]>;
  private parsedData: GoodreadsBookEntry[] = [];
  constructor(private router: Router) {
    this.papa = new Papa<GoodreadsBookEntry[]>();
  }

  parseGoodreadsData(csvData: string): boolean {
    try {
      const parsedData = this.papa.parse(csvData, {
        header: true,
        transformHeader: (str) => camelize(removeNullables(str)),
        dynamicTyping: true,
      });
      this.parsedData = parsedData.data;
      return true;
    } catch (error: any) {
      return false;
    }
  }

  getGoodreadsData(): GoodreadsBookEntry[] {
    if (this.parsedData.length === 0) {
      this.router.navigate(['/upload']);
    }
    return this.parsedData;
  }
}
