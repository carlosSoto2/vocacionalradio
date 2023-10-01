import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGrid5ColsNogutComponent } from './page-project-grid5-cols-nogut.component';

describe('PageProjectGrid5ColsNogutComponent', () => {
  let component: PageProjectGrid5ColsNogutComponent;
  let fixture: ComponentFixture<PageProjectGrid5ColsNogutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectGrid5ColsNogutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectGrid5ColsNogutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
