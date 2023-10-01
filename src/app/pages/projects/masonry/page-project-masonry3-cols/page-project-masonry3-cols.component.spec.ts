import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectMasonry3ColsComponent } from './page-project-masonry3-cols.component';

describe('PageProjectMasonry3ColsComponent', () => {
  let component: PageProjectMasonry3ColsComponent;
  let fixture: ComponentFixture<PageProjectMasonry3ColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectMasonry3ColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectMasonry3ColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
