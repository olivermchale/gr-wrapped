import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GoodreadsScraperService {
  constructor(private http: HttpClient) {}

  scrapedData: string[] = [];

  scrapeGoodreadsData(profileUrl: string) {
    return this.http.post<string[]>(environment.serviceUrl, { profileUrl });
  }

  setScrapedData(data: string[]) {
    this.scrapedData = data;
  }

  getScrapedData() {
    if (this.scrapedData) {
      return this.scrapedData;
    } else {
      return 'None';
    }
  }
}
