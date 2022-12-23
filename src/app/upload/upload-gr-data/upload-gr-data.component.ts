import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mockGoodreadsData } from 'src/assets/temp-data/goodreads';
import { CsvToJsonService } from '../services/csv-to-json.service';
import { GoodreadsScraperService } from '../services/goodreads-scraper.service';

@Component({
  selector: 'grw-upload-gr-data',
  templateUrl: './upload-gr-data.component.html',
  styleUrls: ['./upload-gr-data.component.scss'],
})
export class UploadGrDataComponent implements OnInit {
  profileURL: string = '';
  constructor(
    private csvToJsonService: CsvToJsonService,
    private goodreadsScraperService: GoodreadsScraperService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleFileInput($event: Event): void {
    const files = ($event.target as HTMLInputElement).files;
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const csvData = fileReader.result as string;
      const success = this.csvToJsonService.parseGoodreadsData(csvData);
      if (success) {
        if (this.profileURL) {
          this.goodreadsScraperService
            .scrapeGoodreadsData(this.profileURL)
            .subscribe((data) => {
              this.goodreadsScraperService.setScrapedData(data);
              this.router.navigate(['/review']);
            });
        } else {
          this.router.navigate(['/review']);
        }
      }
    };
    fileReader.readAsText(files![0]);
  }
}
