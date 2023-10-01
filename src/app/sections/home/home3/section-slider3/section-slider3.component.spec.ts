import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider3Component } from './section-slider3.component';

describe('SectionSlider3Component', () => {
  let component: SectionSlider3Component;
  let fixture: ComponentFixture<SectionSlider3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
