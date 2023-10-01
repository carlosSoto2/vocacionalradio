import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbout2Component } from './page-about2.component';

describe('PageAbout2Component', () => {
  let component: PageAbout2Component;
  let fixture: ComponentFixture<PageAbout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAbout2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAbout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
