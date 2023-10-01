import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectDetail2Component } from './page-project-detail2.component';

describe('PageProjectDetail2Component', () => {
  let component: PageProjectDetail2Component;
  let fixture: ComponentFixture<PageProjectDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProjectDetail2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageProjectDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
