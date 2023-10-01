import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider4Component } from './section-slider4.component';

describe('SectionSlider4Component', () => {
  let component: SectionSlider4Component;
  let fixture: ComponentFixture<SectionSlider4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
