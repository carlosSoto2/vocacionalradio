import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhatWeDo3Component } from './section-what-we-do3.component';

describe('SectionWhatWeDo3Component', () => {
  let component: SectionWhatWeDo3Component;
  let fixture: ComponentFixture<SectionWhatWeDo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionWhatWeDo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWhatWeDo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
