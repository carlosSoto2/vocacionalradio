import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectDetail1Component } from './page-project-detail1.component';

describe('PageProjectDetail1Component', () => {
  let component: PageProjectDetail1Component;
  let fixture: ComponentFixture<PageProjectDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectDetail1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
