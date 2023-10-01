import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGrid4ColsComponent } from './page-project-grid4-cols.component';

describe('PageProjectGrid4ColsComponent', () => {
  let component: PageProjectGrid4ColsComponent;
  let fixture: ComponentFixture<PageProjectGrid4ColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectGrid4ColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectGrid4ColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
