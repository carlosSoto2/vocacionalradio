import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSpecializations1Component } from './section-specializations1.component';

describe('SectionSpecializations1Component', () => {
  let component: SectionSpecializations1Component;
  let fixture: ComponentFixture<SectionSpecializations1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSpecializations1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSpecializations1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
