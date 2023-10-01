import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogPostRightSidebarComponent } from './page-blog-post-right-sidebar.component';

describe('PageBlogPostRightSidebarComponent', () => {
  let component: PageBlogPostRightSidebarComponent;
  let fixture: ComponentFixture<PageBlogPostRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogPostRightSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogPostRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
