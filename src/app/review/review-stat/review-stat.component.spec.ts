import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStatComponent } from './review-stat.component';

describe('ReviewStatComponent', () => {
  let component: ReviewStatComponent;
  let fixture: ComponentFixture<ReviewStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
