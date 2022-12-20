import { Component, OnInit } from '@angular/core';
import { mockGoodreadsData } from 'src/assets/temp-data/goodreads';
import { CsvToJsonService } from '../services/csv-to-json.service';

@Component({
  selector: 'grw-upload-gr-data',
  templateUrl: './upload-gr-data.component.html',
  styleUrls: ['./upload-gr-data.component.scss'],
})
export class UploadGrDataComponent implements OnInit {
  constructor(private csvToJsonService: CsvToJsonService) {}
  ngOnInit(): void {
    const csvData = this.csvToJsonService.parseGoodreadsData(mockGoodreadsData);
    console.log(csvData);
  }
}
