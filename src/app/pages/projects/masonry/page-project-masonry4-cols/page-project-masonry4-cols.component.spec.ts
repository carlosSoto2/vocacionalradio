import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectMasonry4ColsComponent } from './page-project-masonry4-cols.component';

describe('PageProjectMasonry4ColsComponent', () => {
  let component: PageProjectMasonry4ColsComponent;
  let fixture: ComponentFixture<PageProjectMasonry4ColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectMasonry4ColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectMasonry4ColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
