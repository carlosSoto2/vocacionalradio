import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGrid5ColsComponent } from './page-project-grid5-cols.component';

describe('PageProjectGrid5ColsComponent', () => {
  let component: PageProjectGrid5ColsComponent;
  let fixture: ComponentFixture<PageProjectGrid5ColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectGrid5ColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectGrid5ColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
