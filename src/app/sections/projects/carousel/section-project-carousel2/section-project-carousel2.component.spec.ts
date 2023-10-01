import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjectCarousel2Component } from './section-project-carousel2.component';

describe('SectionProjectCarousel2Component', () => {
  let component: SectionProjectCarousel2Component;
  let fixture: ComponentFixture<SectionProjectCarousel2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjectCarousel2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjectCarousel2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
