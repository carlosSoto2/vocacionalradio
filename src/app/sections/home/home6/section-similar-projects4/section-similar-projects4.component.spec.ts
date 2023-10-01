import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSimilarProjects4Component } from './section-similar-projects4.component';

describe('SectionSimilarProjects4Component', () => {
  let component: SectionSimilarProjects4Component;
  let fixture: ComponentFixture<SectionSimilarProjects4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSimilarProjects4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSimilarProjects4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
