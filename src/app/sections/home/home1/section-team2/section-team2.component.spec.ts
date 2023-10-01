import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTeam2Component } from './section-team2.component';

describe('SectionTeam2Component', () => {
  let component: SectionTeam2Component;
  let fixture: ComponentFixture<SectionTeam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionTeam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTeam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
