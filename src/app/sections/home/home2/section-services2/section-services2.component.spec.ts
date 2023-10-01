import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServices2Component } from './section-services2.component';

describe('SectionServices2Component', () => {
  let component: SectionServices2Component;
  let fixture: ComponentFixture<SectionServices2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServices2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServices2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
