import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGrDataComponent } from './upload-gr-data.component';

describe('UploadGrDataComponent', () => {
  let component: UploadGrDataComponent;
  let fixture: ComponentFixture<UploadGrDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadGrDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadGrDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
