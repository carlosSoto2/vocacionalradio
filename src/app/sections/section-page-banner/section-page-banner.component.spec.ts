import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPageBannerComponent } from './section-page-banner.component';

describe('SectionPageBannerComponent', () => {
  let component: SectionPageBannerComponent;
  let fixture: ComponentFixture<SectionPageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPageBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
