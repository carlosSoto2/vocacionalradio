import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectMasonry4ColsNogutComponent } from './page-project-masonry4-cols-nogut.component';

describe('PageProjectMasonry4ColsNogutComponent', () => {
  let component: PageProjectMasonry4ColsNogutComponent;
  let fixture: ComponentFixture<PageProjectMasonry4ColsNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectMasonry4ColsNogutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectMasonry4ColsNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
