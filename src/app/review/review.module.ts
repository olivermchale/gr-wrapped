import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewRoutingModule } from './review-routing.module';
import { ReviewStatComponent } from './review-stat/review-stat.component';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    ReviewStatComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    ReviewRoutingModule
  ]
})
export class ReviewModule { }
