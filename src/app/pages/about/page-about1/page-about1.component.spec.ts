import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbout1Component } from './page-about1.component';

describe('PageAbout1Component', () => {
  let component: PageAbout1Component;
  let fixture: ComponentFixture<PageAbout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAbout1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAbout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
