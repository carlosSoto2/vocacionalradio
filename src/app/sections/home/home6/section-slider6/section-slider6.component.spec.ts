import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSlider6Component } from './section-slider6.component';

describe('SectionSlider6Component', () => {
  let component: SectionSlider6Component;
  let fixture: ComponentFixture<SectionSlider6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSlider6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSlider6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
