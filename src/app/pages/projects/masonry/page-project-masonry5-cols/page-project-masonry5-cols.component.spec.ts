import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectMasonry5ColsComponent } from './page-project-masonry5-cols.component';

describe('PageProjectMasonry5ColsComponent', () => {
  let component: PageProjectMasonry5ColsComponent;
  let fixture: ComponentFixture<PageProjectMasonry5ColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectMasonry5ColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectMasonry5ColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
