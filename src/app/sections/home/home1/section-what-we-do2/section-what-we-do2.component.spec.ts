import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatWeDo2Component } from './section-what-we-do2.component';

describe('SectionWhatWeDo2Component', () => {
  let component: SectionWhatWeDo2Component;
  let fixture: ComponentFixture<SectionWhatWeDo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhatWeDo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhatWeDo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
