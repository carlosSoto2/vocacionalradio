import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectCarousel3Component } from './section-project-carousel3.component';

describe('SectionProjectCarousel3Component', () => {
  let component: SectionProjectCarousel3Component;
  let fixture: ComponentFixture<SectionProjectCarousel3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectCarousel3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjectCarousel3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
