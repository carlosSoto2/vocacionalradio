import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects3Component } from './section-projects3.component';

describe('SectionProjects3Component', () => {
  let component: SectionProjects3Component;
  let fixture: ComponentFixture<SectionProjects3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
