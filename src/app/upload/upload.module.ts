import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadGrDataComponent } from './upload-gr-data/upload-gr-data.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploadGrDataComponent, UploadComponent],
  imports: [CommonModule, UploadRoutingModule, FormsModule],
  exports: [UploadGrDataComponent],
})
export class UploadModule {}
