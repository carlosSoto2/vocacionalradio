import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSimilarProjects1Component } from './section-similar-projects1.component';

describe('SectionSimilarProjects1Component', () => {
  let component: SectionSimilarProjects1Component;
  let fixture: ComponentFixture<SectionSimilarProjects1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSimilarProjects1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSimilarProjects1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
