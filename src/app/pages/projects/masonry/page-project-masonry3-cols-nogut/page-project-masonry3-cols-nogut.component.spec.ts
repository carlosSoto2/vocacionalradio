import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectMasonry3ColsNogutComponent } from './page-project-masonry3-cols-nogut.component';

describe('PageProjectMasonry3ColsNogutComponent', () => {
  let component: PageProjectMasonry3ColsNogutComponent;
  let fixture: ComponentFixture<PageProjectMasonry3ColsNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectMasonry3ColsNogutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectMasonry3ColsNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
