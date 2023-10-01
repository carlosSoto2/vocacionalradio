import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout2Component } from './section-about2.component';

describe('SectionAbout2Component', () => {
  let component: SectionAbout2Component;
  let fixture: ComponentFixture<SectionAbout2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
