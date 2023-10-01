import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectMasonry5ColsNogutComponent } from './page-project-masonry5-cols-nogut.component';

describe('PageProjectMasonry5ColsNogutComponent', () => {
  let component: PageProjectMasonry5ColsNogutComponent;
  let fixture: ComponentFixture<PageProjectMasonry5ColsNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectMasonry5ColsNogutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectMasonry5ColsNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
