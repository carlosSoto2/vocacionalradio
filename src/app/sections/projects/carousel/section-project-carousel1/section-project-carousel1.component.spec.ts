import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectCarousel1Component } from './section-project-carousel1.component';

describe('SectionProjectCarousel1Component', () => {
  let component: SectionProjectCarousel1Component;
  let fixture: ComponentFixture<SectionProjectCarousel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectCarousel1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjectCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
