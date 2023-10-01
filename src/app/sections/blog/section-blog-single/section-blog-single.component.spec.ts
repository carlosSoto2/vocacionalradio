import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogSingleComponent } from './section-blog-single.component';

describe('SectionBlogSingleComponent', () => {
  let component: SectionBlogSingleComponent;
  let fixture: ComponentFixture<SectionBlogSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlogSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
