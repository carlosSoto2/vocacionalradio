import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAbout3Component } from './section-about3.component';

describe('SectionAbout3Component', () => {
  let component: SectionAbout3Component;
  let fixture: ComponentFixture<SectionAbout3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionAbout3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAbout3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
