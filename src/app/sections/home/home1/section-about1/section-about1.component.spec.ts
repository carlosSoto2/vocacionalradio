import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout1Component } from './section-about1.component';

describe('SectionAbout1Component', () => {
  let component: SectionAbout1Component;
  let fixture: ComponentFixture<SectionAbout1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
