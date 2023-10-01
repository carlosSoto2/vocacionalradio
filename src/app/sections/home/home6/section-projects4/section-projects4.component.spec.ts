import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjects4Component } from './section-projects4.component';

describe('SectionProjects4Component', () => {
  let component: SectionProjects4Component;
  let fixture: ComponentFixture<SectionProjects4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjects4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionProjects4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
