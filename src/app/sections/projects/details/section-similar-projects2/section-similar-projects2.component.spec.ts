import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSimilarProjects2Component } from './section-similar-projects2.component';

describe('SectionSimilarProjects2Component', () => {
  let component: SectionSimilarProjects2Component;
  let fixture: ComponentFixture<SectionSimilarProjects2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSimilarProjects2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSimilarProjects2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
