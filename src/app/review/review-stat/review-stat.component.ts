import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { YearStat } from 'src/app/common/types/stat-types';

@Component({
  selector: 'grw-review-stat',
  templateUrl: './review-stat.component.html',
  styleUrls: ['./review-stat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewStatComponent {
  @Input() stat: YearStat<any> | undefined;
}
