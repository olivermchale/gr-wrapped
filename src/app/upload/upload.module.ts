import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadGrDataComponent } from './upload-gr-data/upload-gr-data.component';

@NgModule({
  declarations: [UploadGrDataComponent],
  imports: [CommonModule, UploadRoutingModule],
  exports: [UploadGrDataComponent],
})
export class UploadModule {}
