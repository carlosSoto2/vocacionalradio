import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeam1Component } from './section-team1.component';

describe('SectionTeam1Component', () => {
  let component: SectionTeam1Component;
  let fixture: ComponentFixture<SectionTeam1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTeam1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
