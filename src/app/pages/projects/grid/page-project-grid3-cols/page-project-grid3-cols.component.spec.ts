import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectGrid3ColsComponent } from './page-project-grid3-cols.component';

describe('PageProjectGrid3ColsComponent', () => {
  let component: PageProjectGrid3ColsComponent;
  let fixture: ComponentFixture<PageProjectGrid3ColsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectGrid3ColsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectGrid3ColsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
