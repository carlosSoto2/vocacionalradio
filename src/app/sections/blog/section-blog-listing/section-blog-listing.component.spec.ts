import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogListingComponent } from './section-blog-listing.component';

describe('SectionBlogListingComponent', () => {
  let component: SectionBlogListingComponent;
  let fixture: ComponentFixture<SectionBlogListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
