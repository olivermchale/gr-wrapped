import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { YearStat } from 'src/app/common/types/stat-types';
import { CsvToJsonService } from 'src/app/upload/services/csv-to-json.service';
import { GoodreadsScraperService } from 'src/app/upload/services/goodreads-scraper.service';
import { StatGenerationService } from '../services/stat-generation.service';

@Component({
  selector: 'grw-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewComponent implements OnInit {
  statIndex: number = 0;
  stats: YearStat[] = [];
  constructor(
    private csvToJsonService: CsvToJsonService,
    private statGenerationService: StatGenerationService,
    private goodreadsScraperService: GoodreadsScraperService
  ) {}

  ngOnInit(): void {
    const goodreadsCSVData = this.csvToJsonService.getGoodreadsData();
    const scrapedData = this.goodreadsScraperService.getScrapedData();
    if (scrapedData !== 'None') {
      this.stats = this.statGenerationService.generateStats(
        goodreadsCSVData,
        scrapedData
      );
    } else {
      this.stats = this.statGenerationService.generateStats(goodreadsCSVData);
    }
  }
}
